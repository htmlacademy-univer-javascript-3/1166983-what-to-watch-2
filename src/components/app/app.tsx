import Main from '../../pages/main';
import { FilmDetails } from '../../types/film.tsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppRoutes } from '../../types/routes.tsx';
import Film from '../../pages/film';
import AddReview from '../../pages/add-review';
import SignIn from '../../pages/sign-in';
import Player from '../../pages/player';
import NotFoundScreen from '../../pages/not-found-screen';
import MyList from '../../pages/my-list';

export default function App(props: FilmDetails) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoutes.Main} element={<Main {...props} />} />
        <Route path={AppRoutes.SignIn} element={<SignIn />} />
        <Route path={AppRoutes.MyList} element={<MyList />} />
        <Route path={AppRoutes.Film} element={<Film />} />
        <Route path={AppRoutes.AddReview} element={<AddReview />} />
        <Route path={AppRoutes.Player} element={<Player />} />
        <Route path={AppRoutes.NotFoundScreen} element={<NotFoundScreen />} />
      </Routes>
    </BrowserRouter>
  );
}
