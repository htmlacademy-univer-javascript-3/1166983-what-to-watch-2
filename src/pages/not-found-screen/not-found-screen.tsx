import { Link } from 'react-router-dom';

export default function NotFoundScreen() {
  return (
    <p>
      <h1>Ошибка 404. Страница не найдена</h1>
      <Link to="/">Вернуться на главную страницу</Link>
    </p>
  );
}
