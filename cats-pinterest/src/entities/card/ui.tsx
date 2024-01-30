import React from "react";
import { FavoriteController } from "features";
import { CatCard } from "shared/types";
import "./style.css";

interface CardProps {
  card: CatCard;
}

export const Card: React.FC<CardProps> = ({ card }) => {
  return (
    <div className="card">
      <img className="card__img" src={card.url} alt="cat image" />
      <FavoriteController card={card} />
    </div>
  );
};
