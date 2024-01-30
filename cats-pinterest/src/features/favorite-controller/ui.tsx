import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getIsCardFavorite, addCard, deleteCard } from "shared/store";
import { CatCard } from "shared/types";
import Heart from "assets/image/svg/favorite.svg";
import "./style.css";

interface FavoriteControllerProps {
  card: CatCard;
}
export const FavoriteController: React.FC<FavoriteControllerProps> = ({
  card,
}) => {
  const dispath = useDispatch();
  const isFavorite = useSelector(getIsCardFavorite(card.id));

  const [isHover, setisHover] = useState(false);

  const handleHover = () => {
    setisHover((prev) => !prev);
  };
  const handleClick = () => {
    isFavorite ? dispath(deleteCard(card.id)) : dispath(addCard(card));
  };

  return (
    <div
      className="heart-container"
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
      onClick={handleClick}
    >
      <svg className="heart">
        <use
          href={`${Heart}#heart-${
            isFavorite ? "full" : isHover ? "full" : "border"
          }`}
        />
      </svg>
    </div>
  );
};
