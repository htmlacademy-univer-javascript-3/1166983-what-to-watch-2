import { createReducer } from '@reduxjs/toolkit';
import { ALL_GENRES } from '../constants/film.ts';
import { setFilms, setSelectedGenre } from './action.ts';
import { FilmPreview } from '../types/film.ts';

interface FilmReducerState {
  films: FilmPreview[];
  filteredFilms: FilmPreview[];
  genres: string[];
  selectedGenre: string;
}

const initialState: FilmReducerState = {
  films: [],
  filteredFilms: [],
  genres: [ALL_GENRES],
  selectedGenre: ALL_GENRES
};

const filmReducer = createReducer(
  initialState,
  (builder) => {
    builder.addCase(setFilms, (state, { payload }) => (
      {
        ...state,
        genres: [ALL_GENRES, ...new Set(payload.map(({ genre }) => genre))],
        films: payload,
        filteredFilms: payload
      }
    ));
    builder.addCase(setSelectedGenre, (state, { payload }) => (
      {
        ...state,
        selectedGenre: payload,
        filteredFilms: payload === ALL_GENRES
          ? state.films
          : state.films.filter((film) => film.genre === payload)
      }
    ));
  });

export default filmReducer;
