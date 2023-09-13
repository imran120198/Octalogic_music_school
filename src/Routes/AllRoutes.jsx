import React from "react";
import { Route, Routes } from "react-router-dom";
import Overview from "../Pages/Overview";
import Login from "../Pages/Login";
import { Course } from "../Pages/Course";


const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Overview />} />
        <Route path="/login" element={<Login />} />
        <Route path="/course" element={<Course />} />
      </Routes>
    </div>
  );
};

export default AllRoutes;
