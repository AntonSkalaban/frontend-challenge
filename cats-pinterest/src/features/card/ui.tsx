import React from "react";
import { CatCard } from "shared/types/type";
import "./style.css";
import { FavoriteController } from "features/favConroller/ui";

interface CardProps {
  card: CatCard;
}

export const Card: React.FC<CardProps> = ({ card }) => {
  const { id, url } = card;
  return (
    <div className="card">
      <img className="card__img" src={url} alt="cat image" />
      <FavoriteController card={card} />
    </div>
  );
};
