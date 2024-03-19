import { Route, Routes } from "react-router";
import "./App.css";
import Header from "./components/Header";
import SideMenu from "./components/SideMenu";
import BrowsePage from "./components/BrowsePage";
import { createContext, useEffect, useState } from "react";
import SignUpPage from "./components/SignUpPage";
import LogInPage from "./components/LogInPage";
import AdForm from "./components/AdForm";
import CategoriesPage from "./components/CategoriesPage";
import CategoryAdsPage from "./components/CategoryAdsPage";
import UserPage from "./components/UserPage";
import MyAds from "./components/MyAds";
import UserSettings from "./components/UserSettings";

const Context = createContext();

function App() {
  const [ads, setAds] = useState([]);
  const [users, setUsers] = useState([]);
  const [userLoggedIn, setUserLoggedIn] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("token") || "");

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await fetch("http://localhost:4000/users");
        if (!response.ok) {
          throw new Error("Failed to fetch users.");
        }
        const userData = await response.json();
        setUsers(userData);
      } catch (error) {
        console.error("Error fetching users data:", error);
      }
    }

    fetchUsers();
  }, []); 

  useEffect(() => {
    setUserLoggedIn(loadUserFromStorage());
  }, []);

  function loadUserFromStorage() {
    const storedUser = localStorage.getItem("userLoggedIn");
    if (storedUser !== undefined || storedUser !== null) {
      const user = users.find((user) => user.email === storedUser);
      return user || null;
    } else {
      return null;
    }
  }

  return (
    <Context.Provider
      value={{
        ads,
        setAds,
        userLoggedIn,
        setUserLoggedIn,
        users,
        setUsers,
        token,
        setToken,
      }}
    >
      <div className="app">
        <Header />
        <SideMenu />

        <div className="page">
          <Routes>
            <Route path="/" element={<BrowsePage />} />
            <Route path="/sign-up" element={<SignUpPage />} />
            <Route path="/log-in" element={<LogInPage />} />
            <Route path="/new-ad" element={<AdForm />} />
            <Route path="/categories" element={<CategoriesPage />} />
            <Route path="/categories/:category" element={<CategoryAdsPage />} />
            <Route path="/profile" element={<UserPage />} />
            <Route path="/profile/my-ads" element={<MyAds />} />
            <Route path="/profile/user-settings" element={<UserSettings />} />
          </Routes>
        </div>
      </div>
    </Context.Provider>
  );
}

export { App, Context };
