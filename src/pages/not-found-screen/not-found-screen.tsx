import { Link } from 'react-router-dom';
import { AppRoutes } from '../../types/routes.ts';
import './not-found-screen.css';

export default function NotFoundScreen() {
  return (
    <div className="not-found-description">
      <span>Ошибка 404. Страница не найдена</span>
      <Link to={AppRoutes.Main}>Вернуться на главную страницу</Link>
    </div>
  );
}
