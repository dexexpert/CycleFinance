import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";

import Valuts from '../pages/Valuts';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate replace to="/lphunt" />} />
      <Route path="/valuts" element={<Valuts />} />
    </Routes>
  );
};

export default Router;
