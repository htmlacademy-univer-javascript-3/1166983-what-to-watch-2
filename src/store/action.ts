import { createAction } from '@reduxjs/toolkit';
import { FilmPreview } from '../types/film.ts';

export const setFilms = createAction<FilmPreview[]>('setFilms');
export const setSelectedGenre = createAction<string>('setSelectedGenre');
export const showMoreFilms = createAction('showMoreFilms');
