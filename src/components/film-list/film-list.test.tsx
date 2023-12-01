import { render, screen } from '@testing-library/react';
import { withProviders } from '../../utils/mock-component.tsx';
import FilmList from './index.tsx';
import { mockFilmDetails } from '../../utils/mock-data.ts';

describe('Component: FilmList', () => {
  const mockedFilmDetails = mockFilmDetails();

  it('should display video on hover and image by default', () => {
    const { component } = withProviders(<FilmList data={[mockedFilmDetails]} />);
    render(component);
    const article = screen.getByRole('article');
    expect(article).toBeInTheDocument();
  });
});
