import {Navigate} from 'react-router-dom';
import { ReactElement } from 'react';
import { AppRoutes } from '../../types/routes.tsx';

interface PrivateRouteProps {
  isAuthorized?: boolean;
  children: ReactElement;
}

export default function PrivateRoute({isAuthorized = false, children}: PrivateRouteProps) {
  return (
    isAuthorized
      ? children
      : <Navigate to={AppRoutes.SignIn} />
  );
}
