import React from "react";
import { CatCard } from "shared/types";
import { Card } from "entities";
import "./style.css";

interface CardsListProps {
  data: CatCard[];
}
export const CardsList: React.FC<CardsListProps> = ({ data }) => {
  return (
    <div className="cards-list">
      {data?.map((card) => {
        return <Card key={card.id} card={card} />;
      })}
    </div>
  );
};
