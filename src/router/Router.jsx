import React from "react";
import { Routes, Route } from "react-router-dom";
import App from "../App";
import ProjectDetails from "../components/ProjectDetails/ProjectDetails";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/projects/:id" element={<ProjectDetails />} />
    </Routes>
  );
};

export default AppRouter;
