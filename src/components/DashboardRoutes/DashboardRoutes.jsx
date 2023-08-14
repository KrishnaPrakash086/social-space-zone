import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "../../pages/Home";
import Profile from "../../pages/Profile";
import Community from "../../pages/Community";
import Explore from "../../pages/Explore";
import Notification from "../../pages/Notification";
import PrivateWrapper from "../../utils/PrivateWrapper";

function DashboardRoute() {
  return (
    <Routes>
      <Route element={<PrivateWrapper />}>
        <Route path="/" exact element={<Home />} />
        <Route path="/community" exact element={<Community />} />
        <Route path="/explore" exact element={<Explore />} />
        <Route path="/notification" exact element={<Notification />} />
        <Route path="/profile/:id" exact element={<Profile />} />
        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  );
}

function PageNotFound() {
  return (
    <div style={{ minHeight: "calc(100vh - 51px)" }}>Page Not Found:404</div>
  );
}

export default DashboardRoute;
