import React from "react";
import { cardAPI } from "shared/api";
import { Wrapper } from "shared/components/Wrapper/ui";
import { CardsList } from "shared/components/cards-list/ui";
import "./style.css";

export const Main = () => {
  const { data, isError, isFetching } = cardAPI.useGetCardsQuery();

  if (isFetching) return <p>Загрузка...</p>;
  if (!data || !data.length) return <p>Not found:(</p>;
  if (isError) return <p>Error</p>;

  console.log(data);
  return (
    <div className="main">
      <Wrapper>
        <CardsList data={data} />
      </Wrapper>
    </div>
  );
};
