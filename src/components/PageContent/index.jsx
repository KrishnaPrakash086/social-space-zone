import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import HeaderLayout from "../../layouts/HeaderLayout";

import AppRoutes from "../AppRoutes";
import DashboardRoute from "../DashboardRoutes/DashboardRoutes";

function Layout() {
  return (
    <HeaderLayout>
      <DashboardRoute />
    </HeaderLayout>
  );
}

function Index() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/social" />} />
        <Route path="/*" element={<AppRoutes />} />
        <Route path="/social/*" element={<Layout />} />
      </Routes>
    </Router>
  );
}

export default Index;
