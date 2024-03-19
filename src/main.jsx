import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.jsx";
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";

import BrowsePage from "./components/BrowsePage.jsx";
import LogInPage from "./components/Auth/LogInPage.jsx";
import SignUpPage from "./components/Auth/SignUpPage.jsx"
import UserPage from "./components/ProfilePage/UserPage.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <React.StrictMode>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<BrowsePage />} />
          <Route path="login" element={<LogInPage />} />
          <Route path="signup" element={<SignUpPage />} />
          <Route path="profile" element={<UserPage />} />
        </Route>
      </Routes>
    </React.StrictMode>
  </BrowserRouter>
);
