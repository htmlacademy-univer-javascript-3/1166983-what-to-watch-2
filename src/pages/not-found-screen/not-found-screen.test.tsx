import { render, screen } from '@testing-library/react';
import NotFoundScreen from './index.tsx';
import { withProviders } from '../../utils/mock-component.tsx';
import userEvent from '@testing-library/user-event';
import { expect } from 'vitest';
import { AppRoutes } from '../../types/routes.ts';

describe('Component: SignInForm', () => {
  it('should render correctly', async () => {
    const {component, history} = withProviders(<NotFoundScreen />);
    render(component);
    expect(screen.getByText(/ошибка 404\. страница не найдена/i)).toBeInTheDocument();
    await userEvent.click(screen.getByRole('button', {name: /вернуться на главную страницу/i}));
    expect(history.location.pathname).toBe(AppRoutes.Main);
  });
});
