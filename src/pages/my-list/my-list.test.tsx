import { render, screen } from '@testing-library/react';
import { withProviders } from '../../utils/mock-component.tsx';
import { expect } from 'vitest';
import MyList from './index.tsx';
import { mockFilmArray } from '../../utils/mock-data.ts';

describe('Component: MyList', () => {
  const mockedFavouriteFilms = mockFilmArray();

  it('should render correctly', () => {
    const { component } = withProviders(<MyList />, {
      film: {
        favouriteFilms: mockedFavouriteFilms,
      }
    });
    render(component);
    expect(screen.getByText(/my list/i)).toBeInTheDocument();
    expect(screen.getByText(mockedFavouriteFilms.length)).toBeInTheDocument();
    expect(screen.getByText(/catalog/i)).toBeInTheDocument();
  });
});
