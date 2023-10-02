import Header from '../../components/header';
import AddReviewForm from './add-review-form';
import { FilmDetails } from '../../types/film.tsx';

export default function AddReview({id, backgroundImage, name, previewImage}: FilmDetails) {
  return (
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src={backgroundImage} alt={name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <Header>
          <Header.Logo />
          <Header.Breadcrumbs title={name} id={id} />
          <Header.UserBlock />
        </Header>

        <div className="film-card__poster film-card__poster--small">
          <img src={previewImage} alt={`${name} poster`} width="218" height="327" />
        </div>
      </div>

      <div className="add-review">
        <AddReviewForm />
      </div>

    </section>
  );
}
