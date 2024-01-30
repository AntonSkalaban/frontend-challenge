import React from "react";
import { Wrapper } from "shared/components/Wrapper/ui";
import { Nav } from "shared/nav/ui";
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
