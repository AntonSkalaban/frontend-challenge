import React from "react";
import { CatCard } from "shared/types/type";
import { Card } from "features/card/ui";
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
