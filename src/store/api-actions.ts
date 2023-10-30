import { createAsyncThunk } from '@reduxjs/toolkit';
import { AsyncActionConfig } from '../types/state.ts';
import { FilmDetails, FilmPreview } from '../types/film.ts';

export const loadFilms = createAsyncThunk<FilmPreview[], undefined, AsyncActionConfig>(
  'films/loadFilms',
  async (_arg, {extra: api}) =>
    (await api.get<FilmPreview[]>('/films')).data,
);

export const loadPromoFilm = createAsyncThunk<FilmDetails, undefined, AsyncActionConfig>(
  'films/promoFilm',
  async (_arg, {extra: api}) =>
    (await api.get<FilmDetails>('/promo')).data,
);
