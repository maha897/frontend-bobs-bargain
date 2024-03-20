import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.jsx";
import {
  Route,
  Routes,
  HashRouter
} from "react-router-dom";

import BrowsePage from "./components/BrowsePage/BrowsePage.jsx";
import LogInPage from "./components/Auth/LogInPage.jsx";
import SignUpPage from "./components/Auth/SignUpPage.jsx"
import UserPage from "./components/ProfilePage/UserPage.jsx";
import MyAds from "./components/ProfilePage/MyAds.jsx";
import UserSettings from "./components/ProfilePage/UserSettings.jsx";
import AdView from "./components/Listing/AdView.jsx";
import AdEdit from "./components/Listing/AdEdit.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <HashRouter>
    <React.StrictMode>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<BrowsePage />} />
          <Route path="login" element={<LogInPage />} />
          <Route path="signup" element={<SignUpPage />} />
          <Route path="listings/:id" element={<AdView />} />
          <Route path="listings/:id/edit" element={<AdEdit />} />
          <Route path="profile" element={<UserPage />} />
          <Route path="profile/items" element={<MyAds />} />
          <Route path="profile/settings" element={<UserSettings />} />
        </Route>
      </Routes>
    </React.StrictMode>
  </HashRouter>
);
