import { Link } from 'react-router-dom';
import { AppRoutes } from '../../../types/routes.ts';

interface AddReviewLinkProps {
  id: string;
}

export default function AddReviewLink({id}: AddReviewLinkProps) {
  return (
    <Link
      to={AppRoutes.AddReview.replace(':id', id)}
      className="btn film-card__button"
    >
      Add review
    </Link>
  );
}
