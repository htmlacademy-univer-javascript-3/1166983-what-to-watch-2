import { Link, useParams } from 'react-router-dom';
import { AppRoutes } from '../../../types/routes.ts';

export default function AddReviewLink() {
  const id = Number(useParams().id);

  return (
    <Link
      to={AppRoutes.AddReview.replace(':id', id.toString())}
      className="btn film-card__button"
    >
      Add review
    </Link>
  );
}
