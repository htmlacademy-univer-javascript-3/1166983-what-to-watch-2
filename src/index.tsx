import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app';
import { FILM_DETAILS_MOCK } from './mocks/films.ts';
import { Provider } from 'react-redux';
import { store } from './store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App films={FILM_DETAILS_MOCK} />
    </Provider>
  </React.StrictMode>
);
