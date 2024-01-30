import React from "react";
import { Wrapper } from "shared/ui/wrapper/ui";
import { Nav } from "widgets";
import "./style.css";

export const Header = () => {
  return (
    <header className="header">
      <Wrapper>
        <Nav />
      </Wrapper>
    </header>
  );
};
