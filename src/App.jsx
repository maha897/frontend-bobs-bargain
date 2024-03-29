import { createContext, useLayoutEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import { fetchUser } from "./service/api";
import { Outlet, useNavigate } from "react-router-dom";

const Context = createContext();

function App() {
  const [user, setUser] = useState(null);
  const [userId, setUserId] = useState(localStorage.getItem("id") || "");
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  const navigate = useNavigate();

  useLayoutEffect(() => {
    async function init() {
      if (token && userId) {
        console.log("Stored Token: " + token);
        console.log("Stored user ID: " + userId);
        try {
          const userResponse = await fetchUser(userId, token);
          setUser(userResponse);
          console.log("Logged in");
          // Give full access
        } catch (error) {
          console.error("User not authenticated/found", error);
          localStorage.setItem("token", "");
          localStorage.setItem("id", "");
          setUser(null);
          // Redirect to login page
          console.log("Not logged in. Redirecting to /login");
          navigate("/login");
        }
      } else {
        console.log("No stored details");
        localStorage.setItem("token", "");
        localStorage.setItem("id", "");
        setUser(null);
        // Redirect to login page
        console.log("Not logged in. Redirecting to /login");
        navigate("/login");
      }
    }

    init();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Context.Provider
      value={{
        user,
        setUser,
        userId,
        setUserId,
        token,
        setToken,
      }}
    >
      <div className="app">
        <Header />
        <div className="page">
          <Outlet />
        </div>
      </div>
    </Context.Provider>
  );
}

export { App, Context };
