import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";

import { Footer, Header, Main, Sidebar } from "./components";

import styles from "./App.module.scss";

import { DashboardPage, FormsPage, ProfilePage } from "./pages";

const Layout: React.FC = () => {
  const [isAsideOpen, setAsideOpen] = useState(true);
  const toggleAside = () => setAsideOpen((curr) => !curr);

  return (
    <div className={styles.app}>
      <Header toggleAside={toggleAside} />
      <Sidebar isAsideOpen={isAsideOpen} />
      <Main isAsideOpen={isAsideOpen}>
        <Outlet />
      </Main>
      <Footer isAsideOpen={isAsideOpen} />
    </div>
  );
};

const Router: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<DashboardPage />} />
        <Route path="/forms" element={<FormsPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Route>
    </Routes>
  );
};

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Router></Router>
    </BrowserRouter>
  );
};

export default App;
