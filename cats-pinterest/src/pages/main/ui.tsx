import React, { useEffect, useState } from "react";
import { cardAPI } from "shared/api";
import { Wrapper, CardsList } from "shared/ui";

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
    return <p className="message">Загрузка первых котиков...</p>;
  if (!data?.cards || !data.cards.length)
    return <p className="message">Not found:(</p>;
  if (isError) return <p className="message">Error</p>;

  return (
    <div className="page main">
      <Wrapper>
        <CardsList data={data.cards} />
        <p className="message">Загружаем еще котиков...</p>
      </Wrapper>
    </div>
  );
};
