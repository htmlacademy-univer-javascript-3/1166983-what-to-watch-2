import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app';
import { FILM_DETAILS_MOCK } from './mocks/films.ts';
import { PLAYER_DATA_MOCK } from './mocks/player.ts';
import { REVIEWS_MOCK } from './mocks/reviews.ts';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App films={FILM_DETAILS_MOCK} playerData={PLAYER_DATA_MOCK} reviews={REVIEWS_MOCK} />
  </React.StrictMode>
);
