import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "../pages/homepage/HomePage";
import About from "../pages/about/About";

const AppRouter = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/dashboard" element={<About />} />
        </Routes>
      </Router>
    </>
  );
};

export default AppRouter;
