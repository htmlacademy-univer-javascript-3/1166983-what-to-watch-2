import { render, screen} from '@testing-library/react';
import App from './app';
import { withProviders } from '../../utils/mock-component';
import { AppRoutes } from '../../types/routes.ts';
import { AuthorizationStatus } from '../../types/user.ts';
import { mockFilmDetails } from '../../utils/mock-data.ts';
import { initialState as filmSliceState } from '../../store/film.ts';

describe('Application Routing', () => {
  const filmDetails = mockFilmDetails();

  it('should render main page when user navigate to "/"', () => {
    const { component, history } = withProviders(<App />);
    history.push(AppRoutes.Main);

    render(component);

    expect(screen.getByText(/catalog/i)).toBeInTheDocument();
  });

  it('should render sign in page when user navigate to "/login"', () => {
    const { component, history } = withProviders(<App />);
    history.push(AppRoutes.SignIn);

    render(component);

    expect(screen.getByRole('button', {name: /sign in/i})).toBeInTheDocument();
  });

  it('should render my list page when user navigate to "/mylist"', () => {
    const { component, history } = withProviders(<App />,
      {
        user: {
          authorizationStatus: AuthorizationStatus.Authorized,
        }
      });
    history.push(AppRoutes.MyList);

    render(component);

    expect(screen.getByText(/my list/i)).toBeInTheDocument();
  });

  it('should render film page when user navigate to "/film"', () => {
    const { component, history } = withProviders(<App />,
      {
        film: {
          ...filmSliceState,
          selectedFilm: filmDetails,
        },
      });
    history.push(AppRoutes.Film.replace(':id', filmDetails.id));

    render(component);

    expect(screen.getByText(/more like this/i)).toBeInTheDocument();
  });

  it('should render add review-block page when user navigate to "/review-block"', () => {
    const { component, history } = withProviders(<App />,
      {
        film: {
          selectedFilm: filmDetails,
        },
        user: {
          authorizationStatus: AuthorizationStatus.Authorized,
        }
      });
    history.push(AppRoutes.AddReview.replace(':id', filmDetails.id));

    render(component);

    expect(screen.getByRole('button', {name: /post/i})).toBeInTheDocument();
  });

  it('should render player page when user navigate to "/player"', () => {
    const { component, history } = withProviders(<App />,
      {
        film: {
          selectedFilm: filmDetails,
        },
      });
    history.push(AppRoutes.Player.replace(':id', filmDetails.id));

    render(component);

    expect(screen.getByRole('button', {name: /play/i})).toBeInTheDocument();
  });

  it('should render "NotFoundScreen" when user navigate to non-existent route', () => {
    const unknownRoute = '/unknown-route';
    const { component, history } = withProviders(<App />);
    history.push(unknownRoute);

    render(component);

    expect(screen.getByText(/ошибка 404\. страница не найдена/i)).toBeInTheDocument();
    expect(screen.getByRole('button', {name: /вернуться на главную страницу/i})).toBeInTheDocument();
  });
});
