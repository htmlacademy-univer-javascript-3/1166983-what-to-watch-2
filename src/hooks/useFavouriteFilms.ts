import { useAppDispatch, useAppSelector } from './index.ts';
import { useEffect } from 'react';
import { loadFavouriteFilms } from '../store/api-actions.ts';

export function useFavouriteFilms() {
  const { favouriteFilms } = useAppSelector((state) => state.film);
  const { isAuthorized } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (isAuthorized) {
      dispatch(loadFavouriteFilms());
    }
  }, [dispatch, isAuthorized]);

  return { favouriteFilms };
}
