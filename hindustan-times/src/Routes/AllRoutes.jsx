import React from "react";
import { Route, Routes } from "react-router-dom";
import App from "../App";
import SignIn from "../components/Authentication/SignIn";
import Homepage from "./Homepage";

export default function AllRoutes() {
  return (
    <Routes>
      <Route path="*" element={<Homepage />} />
      <Route path="/signin" element={<SignIn />} />
    </Routes>
  );
}
