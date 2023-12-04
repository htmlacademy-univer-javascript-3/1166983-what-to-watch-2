import { render, screen } from '@testing-library/react';
import { withProviders } from '../../utils/mock-component.tsx';
import FilmList from './index.tsx';
import { mockFilmArray } from '../../utils/mock-data.ts';
import { expect } from 'vitest';

describe('Component: FilmList', () => {
  const mockedFilmArray = mockFilmArray();

  it('should display video on hover and image by default', () => {
    const { component } = withProviders(<FilmList data={mockedFilmArray} />);
    render(component);
    const articles = screen.getAllByRole('article');
    expect(articles.length).toBe(mockedFilmArray.length);
  });
});
