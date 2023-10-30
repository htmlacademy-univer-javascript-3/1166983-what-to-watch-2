import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from './index.ts';
import { useEffect } from 'react';
import { loadFilmDetails } from '../store/api-actions.ts';

export function useSelectedFilm() {
  const { id = '' } = useParams();
  const { selectedFilm } = useAppSelector((state) => state.film);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(loadFilmDetails(id));
  }, [dispatch, id]);

  return selectedFilm;
}
