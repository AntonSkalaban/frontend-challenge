import { Card } from "features/card/ui";
import React from "react";
import { cardAPI } from "shared/api";
import { Wrapper } from "shared/components/Wrapper/ui";
import "./style.css";

export const Main = () => {
  const { data, isError, isFetching } = cardAPI.useGetCardsQuery();

  if (isError) return <p>Error</p>;
  if (isFetching) return <p>Загрузка...</p>;

  console.log(data);
  return (
    <div className="main">
      <Wrapper>
        <div className="card-list">
          {data?.map((card) => {
            return <Card key={card.id} card={card} />;
          })}
        </div>
      </Wrapper>
    </div>
  );
};
