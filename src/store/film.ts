import { createReducer } from '@reduxjs/toolkit';
import { ALL_GENRES, FILM_LIST_PORTION_SIZE } from '../constants/film.ts';
import { setFilms, setSelectedGenre, showMoreFilms } from './action.ts';
import { FilmPreview } from '../types/film.ts';

interface FilmReducerState {
  films: FilmPreview[];
  filteredFilms: FilmPreview[];
  filmListPortion: FilmPreview[];
  genres: string[];
  selectedGenre: string;
  filmListLength: number;
}

const initialState: FilmReducerState = {
  films: [],
  filteredFilms: [],
  filmListPortion: [],
  genres: [ALL_GENRES],
  selectedGenre: ALL_GENRES,
  filmListLength: FILM_LIST_PORTION_SIZE,
};

const filmReducer = createReducer(
  initialState,
  (builder) => {
    builder.addCase(setFilms, (state, { payload }) => (
      {
        ...state,
        ...initialState,
        genres: [ALL_GENRES, ...new Set(payload.map(({ genre }) => genre))],
        films: payload,
        filteredFilms: payload,
        filmListPortion: payload.slice(0, FILM_LIST_PORTION_SIZE),
      }
    ));
    builder.addCase(setSelectedGenre, (state, { payload }) => {
      const filteredFilms =
        payload === ALL_GENRES
          ? state.films
          : state.films.filter((film) => film.genre === payload);

      return (
        {
          ...state,
          selectedGenre: payload,
          filteredFilms,
          filmListLength: FILM_LIST_PORTION_SIZE,
          filmListPortion: filteredFilms.slice(0, FILM_LIST_PORTION_SIZE)
        }
      );
    });
    builder.addCase(showMoreFilms, (state) => {
      const newLength = state.filmListLength + FILM_LIST_PORTION_SIZE;

      return (
        {
          ...state,
          filmListLength: newLength,
          filmListPortion: state.filteredFilms.slice(0, newLength)
        }
      );
    });
  });

export default filmReducer;
