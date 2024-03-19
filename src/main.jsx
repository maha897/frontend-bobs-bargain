import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.jsx";
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";

import BrowsePage from "./components/BrowsePage.jsx";
import LogInPage from "./components/LogInPage.jsx";
import SignUpPage from "./components/SignUpPage.jsx"

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <React.StrictMode>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<BrowsePage />} />
          <Route path="login" element={<LogInPage />} />
          <Route path="signup" element={<SignUpPage />} />
        </Route>
      </Routes>
    </React.StrictMode>
  </BrowserRouter>
);
