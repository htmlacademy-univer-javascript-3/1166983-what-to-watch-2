import { Link } from 'react-router-dom';
import { AppRoutes } from '../../../types/routes.ts';
import { useAppSelector } from '../../../hooks';

interface AddReviewLinkProps {
  id: string;
}

export default function AddReviewLink({ id }: AddReviewLinkProps) {
  const { isAuthorized } = useAppSelector((state) => state.user);

  return isAuthorized ? (
    <Link
      to={AppRoutes.AddReview.replace(':id', id)}
      className="btn film-card__button"
    >
      Add review
    </Link>
  ) : null;
}
