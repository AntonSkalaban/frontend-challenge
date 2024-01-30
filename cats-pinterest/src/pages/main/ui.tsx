import React, { useEffect, useState } from "react";
import { cardAPI } from "shared/api";
import { Wrapper } from "shared/components/Wrapper/ui";
import { CardsList } from "shared/components/cards-list/ui";
import "./style.css";

export const Main = () => {
  const [page, setPage] = useState(0);
  const { data, isError, isFetching } = cardAPI.useGetCardsQuery(page);

  useEffect(() => {
    const onScroll = () => {
      const scrolledToBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight;
      if (scrolledToBottom && !isFetching) setPage(page + 1);
    };

    document.addEventListener("scroll", onScroll);

    return () => document.removeEventListener("scroll", onScroll);
  }, [page, isFetching]);

  if (!data?.cards && isFetching)
    return <p className="main__message">Загрузка первых котиков...</p>;
  if (!data?.cards || !data.cards.length)
    return <p className="main__message">Not found:(</p>;
  if (isError) return <p className="main__message">Error</p>;

  return (
    <div className="main">
      <Wrapper>
        <CardsList data={data.cards} />

        <p className="main__message">Загружаем еще котиков...</p>
      </Wrapper>
    </div>
  );
};
