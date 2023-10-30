import { combineReducers } from '@reduxjs/toolkit';
import film from './film.ts';
import app from './app.ts';

export const rootReducer = combineReducers({ film, app });
