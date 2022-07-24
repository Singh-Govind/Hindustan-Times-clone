import React from "react";
import { Route, Routes } from "react-router-dom";
import App from "../App";
import SignIn from "../components/Authentication/SignIn";
import DetailsPage from "./DetailsPage";
import Homepage from "./Homepage";
import SinglePage from "./SinglePage";

export default function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/:title" element={<SinglePage />} />
      <Route path="/details/:title" element={<DetailsPage />} />
    </Routes>
  );
}
