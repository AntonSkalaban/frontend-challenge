import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import "assets/general.css";
import { Layout } from "../Layout/Layout";
import { Main } from "pages/main/ui";
import { Favorite } from "pages/favorite/ui";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Main />} />
        <Route path="favorite" element={<Favorite />} />
      </Route>
    </Routes>
  );
};
