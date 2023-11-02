import { Navigate } from 'react-router-dom';
import { ReactElement } from 'react';
import { AppRoutes } from '../../types/routes.ts';
import { useAppSelector } from '../../hooks';

interface PrivateRouteProps {
  children: ReactElement;
}

export default function PrivateRoute({ children }: PrivateRouteProps) {
  const { isAuthorized } = useAppSelector((state) => state.user);

  return (
    isAuthorized
      ? children
      : <Navigate to={AppRoutes.SignIn} />
  );
}
