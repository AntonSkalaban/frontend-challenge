import React from "react";
import { Wrapper } from "shared/components/Wrapper/ui";
import { CardsList } from "shared/components/cards-list/ui";
import "./style.css";
import { useSelector } from "react-redux";
import { getFavoriteCards } from "shared/store/selectors";

export const Favorite = () => {
  const cards = useSelector(getFavoriteCards);

  if (!cards || !cards.length) return "No Cards(";
  return (
    <div className="main">
      <Wrapper>
        <CardsList data={cards} />
      </Wrapper>
    </div>
  );
};
