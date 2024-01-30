import React from "react";
import { Route, Routes } from "react-router-dom";
import { Layout } from "widgets";
import { Main, Favorite } from "pages";
import "assets/general.css";
import "./style.css";

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
