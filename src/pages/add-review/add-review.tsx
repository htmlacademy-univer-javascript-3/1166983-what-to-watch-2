import Header from '../../components/header';
import AddReviewForm from './add-review-form';
import { FilmDetails } from '../../types/film.tsx';

export default function AddReview({id, backgroundImage, title, image}: FilmDetails) {
  return (
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src={backgroundImage} alt={title} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <Header>
          <Header.Logo />
          <Header.Breadcrumbs title={title} id={id} />
          <Header.UserBlock />
        </Header>

        <div className="film-card__poster film-card__poster--small">
          <img src={image} alt={`${title} poster`} width="218" height="327" />
        </div>
      </div>

      <div className="add-review">
        <AddReviewForm />
      </div>

    </section>
  );
}
