import React from "react";
import { Route, Routes } from "react-router-dom";
// import DashboardLayout from "../../layouts/DashboardLayout";
// import Home from "../../pages/Home";
import Login from "../../pages/Login";
// import Profile from "../../pages/Profile";
import Registration from "../../pages/Registration";

function Index() {
  return (
    <Routes>
      <Route path="/login" exact element={<Login />} />
      <Route exact path="/registration" element={<Registration />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

function PageNotFound() {
  return (
    <div style={{ minHeight: "calc(100vh - 51px)" }}>Page Not Found:404</div>
  );
}

export default Index;
