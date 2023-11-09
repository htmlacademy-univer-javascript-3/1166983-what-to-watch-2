import { createAsyncThunk } from '@reduxjs/toolkit';
import { AsyncActionConfig, WithNavigate } from '../types/state.ts';
import { FilmDetails, FilmPreview } from '../types/film.ts';
import { Review, ReviewFormValues } from '../types/review.ts';
import { UserCredentials, UserData } from '../types/user.ts';
import { dropToken, saveToken } from '../services/storage.ts';
import { StatusCodes } from 'http-status-codes';
import { AxiosError } from 'axios';
import { NOT_FOUND_URL } from '../constants/route.ts';

export const loadFilms = createAsyncThunk<FilmPreview[], undefined, AsyncActionConfig>(
  'films/loadFilms',
  async (_arg, { extra: api }) =>
    (await api.get<FilmPreview[]>('/films')).data,
);

export const loadPromoFilm = createAsyncThunk<FilmDetails, undefined, AsyncActionConfig>(
  'films/loadPromoFilm',
  async (_arg, { extra: api }) =>
    (await api.get<FilmDetails>('/promo')).data,
);

export const loadFilmDetails = createAsyncThunk<FilmDetails, WithNavigate<{ id: string }>, AsyncActionConfig>(
  'films/loadFilmDetails',
  async ({ id, navigate }: WithNavigate<{ id: string }>, { extra: api }) => {
    try {
      return (await api.get<FilmDetails>(`/films/${id}`)).data;
    } catch (error) {
      if (error instanceof AxiosError && error?.response?.status === StatusCodes.NOT_FOUND) {
        navigate(NOT_FOUND_URL);
      }

      throw error;
    }
  },
);

export const loadSuggestions = createAsyncThunk<FilmPreview[], string, AsyncActionConfig>(
  'films/loadSuggestions',
  async (id: string, { extra: api }) =>
    (await api.get<FilmPreview[]>(`/films/${id}/similar`)).data,
);

export const loadReviews = createAsyncThunk<Review[], string, AsyncActionConfig>(
  'reviews/loadReviews',
  async (filmId: string, { extra: api }) =>
    (await api.get<Review[]>(`/comments/${filmId}`)).data,
);

export const verifyToken = createAsyncThunk<UserData, undefined, AsyncActionConfig>(
  'user/verifyToken',
  async (_arg, { extra: api }) => {
    try {
      return (await api.get<UserData>('/login')).data;
    } catch (e) {
      dropToken();
      throw e;
    }
  }
);

export const signIn = createAsyncThunk<UserData, UserCredentials, AsyncActionConfig>(
  'user/signIn',
  async ({ email, password }: UserCredentials, { extra: api }) => {
    const data = (await api.post<UserData>('/login', { email, password })).data;
    saveToken(data.token);
    return data;
  }
);

export const signOut = createAsyncThunk<UserData, undefined, AsyncActionConfig>(
  'user/signOut',
  async (_arg, { extra: api }) => await api.delete('/logout')
);

export const loadFavouriteFilms = createAsyncThunk<FilmPreview[], undefined, AsyncActionConfig>(
  'films/loadFavouriteFilms',
  async (_arg, { extra: api }) =>
    (await api.get<FilmPreview[]>('/favorite')).data,
);

export const clearRequestCount = createAsyncThunk<void, undefined, AsyncActionConfig>(
  'app/clearRequestCount',
  () => undefined,
);

export const addReview = createAsyncThunk<UserData, ReviewFormValues & { filmId: string }, AsyncActionConfig>(
  'reviews/addReview',
  async ({ filmId, ...requestData }: ReviewFormValues & { filmId: string }, { extra: api }) =>
    await api.post(`/comments/${filmId}`, requestData)
);
