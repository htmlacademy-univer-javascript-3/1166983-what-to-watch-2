import { Link } from 'react-router-dom';
import { AppRoutes } from '../../../types/routes.tsx';

interface BreadcrumbsProps {
  id: number;
  title: string;
}

export default function Breadcrumbs({id, title}: BreadcrumbsProps) {
  return (
    <nav className="breadcrumbs">
      <ul className="breadcrumbs__list">
        <li className="breadcrumbs__item">
          <Link to={AppRoutes.Film.replace(':id', id.toString())} className="breadcrumbs__link">
            {title}
          </Link>
        </li>
        <li className="breadcrumbs__item">
          <Link className="breadcrumbs__link" to={AppRoutes.AddReview.replace(':id', id.toString())}>
            Add review
          </Link>
        </li>
      </ul>
    </nav>
  );
}
