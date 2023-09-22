import Main from '../../pages/main';
import { FilmDetails } from '../../types/film.tsx';

export default function App(props: FilmDetails) {
  return (
    <Main {...props} />
  );
}
