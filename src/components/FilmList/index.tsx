import { useFilmList } from "@/lib/hooks/useFilmList";
import { useState } from "react";
import Film from "./FilmCard/Film";
import * as Style from "./index.styled";
import Pagination from "../Pagination/Pagination";

const Films = () => {
  const [page, setPage] = useState(1);
  const pageSize = 12;
  const { filmList, isLoading } = useFilmList(String(page), String(pageSize));

  const filmsList = filmList?.data.movies.map((film) => {
    return <Film key={film.id} {...film}></Film>;
  });

  if (isLoading) {
    return;
  }
  return filmList ? (
    <Style.Films>
      <Style.Content>
        <Style.Title>Films</Style.Title>
        <Style.List>{filmsList}</Style.List>
        <Pagination
          totalUsersCount={filmList?.data?.movie_count}
          currentPage={page}
          pageSize={pageSize}
          onPageChange={(page) => setPage(page)}
        />
      </Style.Content>
    </Style.Films>
  ) : null;
};

export default Films;
