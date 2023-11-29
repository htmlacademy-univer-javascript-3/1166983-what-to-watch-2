import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { withProviders } from '../../../utils/mock-component.tsx';
import MyListButton from './index.tsx';
import { mockFilmDetails, mockUserDetails } from '../../../utils/mock-data.ts';
import { AuthorizationStatus } from '../../../types/user.ts';
import { loadFavoriteFilms, setIsFavorite } from '../../../store/api-actions.ts';
import { extractActionsTypes } from '../../../utils/reducer.ts';
import { AppRoutes } from '../../../types/routes.ts';
import * as faker from 'faker';

describe('Component: MyListButton', () => {
  const mockedListLength = faker.datatype.number();

  it('should render correctly', () => {
    const { component } = withProviders(<MyListButton listLength={mockedListLength} />, {
      film: {
        selectedFilm: mockFilmDetails()
      },
      user: {
        ...mockUserDetails(),
        authorizationStatus: AuthorizationStatus.Authorized,
      },
    });

    render(component);
    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.getByText('My list')).toBeInTheDocument();
    expect(screen.getByText(mockedListLength)).toBeInTheDocument();
  });

  it('should change favourite film list when authorized user clicks on the button', async () => {
    const { component, mockStore, mockAxiosAdapter } =
      withProviders(
        <MyListButton listLength={mockedListLength} />,
        {
          film: {
            selectedFilm: mockFilmDetails()
          },
          user: {
            ...mockUserDetails(),
            authorizationStatus: AuthorizationStatus.Authorized,
          },
        });
    mockAxiosAdapter.onPost(/\/favorite\/*/).reply(200);
    mockAxiosAdapter.onGet(/\/favorite\/*/).reply(200);

    render(component);
    await userEvent.click(screen.getByRole('button'));
    const actions = extractActionsTypes(mockStore.getActions());

    expect(actions).toEqual([
      setIsFavorite.pending.type,
      setIsFavorite.fulfilled.type,
      loadFavoriteFilms.pending.type,
      loadFavoriteFilms.fulfilled.type,
    ]);
  });

  it('should redirect to login page when guest clicks on the button', async () => {
    const { component, mockStore, history } = withProviders(<MyListButton listLength={mockedListLength} />, {
      film: {
        selectedFilm: mockFilmDetails()
      },
      user: {
        ...mockUserDetails(),
        authorizationStatus: AuthorizationStatus.Unauthorized,
      },
    });

    render(component);
    await userEvent.click(screen.getByRole('button'));
    const actions = extractActionsTypes(mockStore.getActions());
    expect(history.location.pathname).toBe(AppRoutes.SignIn);
    expect(actions).toEqual([]);
  });
});
