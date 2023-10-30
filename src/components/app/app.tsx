import Main from '../../pages/main';
import { FilmDetails, FilmPreview } from '../../types/film.ts';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppRoutes } from '../../types/routes.ts';
import Film from '../../pages/film';
import AddReview from '../../pages/add-review';
import SignIn from '../../pages/sign-in';
import Player from '../../pages/player';
import NotFoundScreen from '../../pages/not-found-screen';
import MyList from '../../pages/my-list';
import PrivateRoute from '../private-route';
import { PlayerProps } from '../../pages/player/player.tsx';
import { Review } from '../../types/review.ts';
import { useAppDispatch } from '../../hooks';
import { useEffect } from 'react';
import { loadFilms, loadPromoFilm } from '../../store/api-actions.ts';

interface AppProps {
  films: (FilmDetails & FilmPreview)[];
  playerData: PlayerProps;
  reviews: Review[];
}

export default function App({ films, playerData, reviews }: AppProps) {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(loadFilms());
    dispatch(loadPromoFilm());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoutes.Main} element={<Main />} />
        <Route path={AppRoutes.SignIn} element={<SignIn />} />
        <Route
          path={AppRoutes.MyList}
          element={
            <PrivateRoute>
              <MyList films={films} />
            </PrivateRoute>
          }
        />
        <Route path={AppRoutes.Film} element={<Film {...films[0]} suggestions={films} reviews={reviews} />} />
        <Route
          path={AppRoutes.AddReview}
          element={
            <PrivateRoute>
              <AddReview {...films[0]} />
            </PrivateRoute>
          }
        />
        <Route path={AppRoutes.Player} element={<Player {...playerData} />} />
        <Route path={AppRoutes.NotFoundScreen} element={<NotFoundScreen />} />
      </Routes>
    </BrowserRouter>
  );
}
