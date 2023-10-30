import { combineReducers } from '@reduxjs/toolkit';
import film from './film.ts';
import app from './app.ts';
import reviews from './reviews.ts';

export const rootReducer = combineReducers({ film, reviews, app });
