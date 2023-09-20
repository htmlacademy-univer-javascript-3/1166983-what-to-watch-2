import MainPage from '../../pages/MainPage';
import { FilmDetails } from '../../types/film.tsx';

export default function App(props: FilmDetails) {
  return (
    <MainPage {...props} />
  );
}
