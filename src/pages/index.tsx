import { MainLayout } from "@/components/MainLayout";
import PopularFilms from "@/components/PopularFilms";
import TopRatedFilms from "@/components/TopRatedFilms";
import Films from "@/components/FilmList";
import Preview from "@/components/Preview";

const App = () => {
  return (
    <MainLayout>
      <Preview />
      <PopularFilms/>
      <TopRatedFilms/>
      <Films/>
    </MainLayout>
  );
};

export default App;
