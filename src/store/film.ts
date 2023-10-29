import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ALL_GENRES, FILM_LIST_PORTION_SIZE } from '../constants/film.ts';
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

const filmSlice = createSlice({
  name: 'film',
  initialState,
  reducers: {
    setFilms: (state, action: PayloadAction<FilmPreview[]>) => (
      {
        ...state,
        ...initialState,
        genres: [ALL_GENRES, ...new Set(action.payload.map(({ genre }) => genre))],
        films: action.payload,
        filteredFilms: action.payload,
        filmListPortion: action.payload.slice(0, FILM_LIST_PORTION_SIZE),
      }
    ),
    setSelectedGenre: (state, action: PayloadAction<string>) => {
      const filteredFilms =
        action.payload === ALL_GENRES
          ? state.films
          : state.films.filter((film) => film.genre === action.payload);

      return (
        {
          ...state,
          selectedGenre: action.payload,
          filteredFilms,
          filmListLength: FILM_LIST_PORTION_SIZE,
          filmListPortion: filteredFilms.slice(0, FILM_LIST_PORTION_SIZE)
        }
      );
    },
    showMoreFilms: (state) => {
      const newLength = state.filmListLength + FILM_LIST_PORTION_SIZE;

      return (
        {
          ...state,
          filmListLength: newLength,
          filmListPortion: state.filteredFilms.slice(0, newLength)
        }
      );
    }
  }
});

export const { setFilms, setSelectedGenre, showMoreFilms } = filmSlice.actions;
export default filmSlice.reducer;