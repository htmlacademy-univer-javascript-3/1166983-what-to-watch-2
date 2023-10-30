import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from './index.ts';
import { useEffect } from 'react';
import { loadFilmDetails, loadSuggestions, loadReviews } from '../store/api-actions.ts';

interface UseSelectedFilmParams {
  shouldLoadSuggestions?: boolean;
  shouldLoadReviews?: boolean;
}

export function useSelectedFilm({ shouldLoadSuggestions = false, shouldLoadReviews = false }: UseSelectedFilmParams) {
  const { id = '' } = useParams();
  const { selectedFilm, suggestionPortion } = useAppSelector((state) => state.film);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(loadFilmDetails(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (shouldLoadSuggestions) {
      dispatch(loadSuggestions(id));
    }
  }, [dispatch, id, shouldLoadSuggestions]);

  useEffect(() => {
    if (shouldLoadReviews) {
      dispatch(loadReviews(id));
    }
  }, [dispatch, id, shouldLoadReviews]);

  return { selectedFilm, suggestionPortion };
}
