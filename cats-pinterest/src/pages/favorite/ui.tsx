import React from "react";
import { useSelector } from "react-redux";
import { getFavoriteCards } from "shared/store";
import { Wrapper, CardsList } from "shared/ui";

export const Favorite = () => {
  const cards = useSelector(getFavoriteCards);

  if (!cards || !cards.length)
    return <p className="message">Еще нет любымых котиков(</p>;

  return (
    <div className="page favorite">
      <Wrapper>
        <CardsList data={cards} />
      </Wrapper>
    </div>
  );
};
