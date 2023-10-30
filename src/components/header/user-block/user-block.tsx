import { Link, useNavigate } from 'react-router-dom';
import { AppRoutes } from '../../../types/routes.ts';
import { useAppSelector } from '../../../hooks';

export default function UserBlock() {
  const {isAuthorized, avatarUrl} = useAppSelector((state) => state.user);
  const navigate = useNavigate();

  return (
    isAuthorized ? (
      <ul className="user-block">
        <li className="user-block__item">
          <div className="user-block__avatar" onClick={() => navigate(AppRoutes.MyList)}>
            <img src={avatarUrl} alt="User avatar" width="63" height="63" />
          </div>
        </li>
        <li className="user-block__item">
          <Link to={AppRoutes.Main} className="user-block__link">Sign out</Link>
        </li>
      </ul>
    ) : (
      <div className="user-block">
        <Link to={AppRoutes.SignIn} className="user-block__link">Sign in</Link>
      </div>
    )
  );
}
