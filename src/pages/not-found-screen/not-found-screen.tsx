import { Link } from 'react-router-dom';
import { AppRoutes } from '../../types/routes.ts';

export default function NotFoundScreen() {
  return (
    <p>
      <h1>Ошибка 404. Страница не найдена</h1>
      <Link to={AppRoutes.Main}>Вернуться на главную страницу</Link>
    </p>
  );
}
