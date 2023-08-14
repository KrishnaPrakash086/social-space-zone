import "./App.css";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import Home from "./pages/Home";
// import Profile from "./pages/Profile";
// import Login from "./pages/Login";
// import Registration from "./pages/Registration";
import React from "react";

import { Provider } from "react-redux";
import PageContent from "./components/PageContent";
// import HeaderLayout from "./layouts/HeaderLayout";
// import DashboardLayout from "./layouts/DashboardLayout";
import store from "./slice/store";

function App() {
  return (
    // <HeaderLayout>
    <Provider store={store}>
      <PageContent />
    </Provider>
    // </HeaderLayout>
  );
}

export default App;
