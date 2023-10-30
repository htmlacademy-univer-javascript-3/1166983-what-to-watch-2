import { createAsyncThunk } from '@reduxjs/toolkit';
import { AsyncActionConfig } from '../types/state.ts';
import { FilmDetails, FilmPreview } from '../types/film.ts';
import { Review } from '../types/review.ts';
import { UserCredentials, UserData } from '../types/user.ts';

export const loadFilms = createAsyncThunk<FilmPreview[], undefined, AsyncActionConfig>(
  'films/loadFilms',
  async (_arg, {extra: api}) =>
    (await api.get<FilmPreview[]>('/films')).data,
);

export const loadPromoFilm = createAsyncThunk<FilmDetails, undefined, AsyncActionConfig>(
  'films/loadPromoFilm',
  async (_arg, {extra: api}) =>
    (await api.get<FilmDetails>('/promo')).data,
);

export const loadFilmDetails = createAsyncThunk<FilmDetails, string, AsyncActionConfig>(
  'films/loadFilmDetails',
  async (id: string, {extra: api}) =>
    (await api.get<FilmDetails>(`/films/${id}`)).data,
);

export const loadSuggestions = createAsyncThunk<FilmPreview[], string, AsyncActionConfig>(
  'films/loadSuggestions',
  async (id: string, {extra: api}) =>
    (await api.get<FilmPreview[]>(`/films/${id}/similar`)).data,
);

export const loadReviews = createAsyncThunk<Review[], string, AsyncActionConfig>(
  'reviews/loadReviews',
  async (filmId: string, {extra: api}) =>
    (await api.get<Review[]>(`/comments/${filmId}`)).data,
);

export const signIn = createAsyncThunk<UserData, UserCredentials, AsyncActionConfig>(
  'user/signIn',
  async ({email, password}: UserCredentials, {extra: api}) =>
    (await api.post<UserData>('/login', {email, password})).data,
);
