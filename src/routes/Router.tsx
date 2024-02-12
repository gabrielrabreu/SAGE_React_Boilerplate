import React from "react";
import { Routes, Route } from "react-router-dom";

import Layout from "../layout";
import { DashboardPage, FormsPage, HomePage, ProfilePage } from "../pages";

const Router: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/forms" element={<FormsPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Route>
    </Routes>
  );
};

export default Router;
