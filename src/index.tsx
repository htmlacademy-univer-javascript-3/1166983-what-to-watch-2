import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app';
import { FilmDetails } from './types/film.tsx';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const mainPageProps: FilmDetails = {
  title: 'The Grand Budapest Hotel',
  genre: 'Drama',
  releaseYear: 2014
};

root.render(
  <React.StrictMode>
    <App {...mainPageProps}/>
  </React.StrictMode>
);
