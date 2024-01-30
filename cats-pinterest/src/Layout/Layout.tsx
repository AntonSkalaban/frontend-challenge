import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "shared/header/ui";

export const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};
