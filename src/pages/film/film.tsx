import Footer from '../../components/footer';
import Header from '../../components/header';
import FilmList from '../../components/film-list';
import { FilmDetails, FilmPreview } from '../../types/film.ts';
import FilmControls from '../../components/film-controls';
import FilmTabs from './film-tabs';
import { Review } from '../../types/review.ts';

interface FilmProps extends FilmDetails {
  suggestions: FilmPreview [];
  reviews: Review[];
}

export default function Film({ reviews, suggestions, ...filmData }: FilmProps) {
  return (
    <>
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={filmData.backgroundImage} alt={filmData.name} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <Header className="film-card__head">
            <Header.Logo />
            <Header.UserBlock />
          </Header>

          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{filmData.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{filmData.genre}</span>
                <span className="film-card__year">{filmData.released}</span>
              </p>

              <FilmControls>
                <FilmControls.PlayLink id={filmData.id} />
                <FilmControls.MyListButton />
                <FilmControls.AddReviewLink id={filmData.id} />
              </FilmControls>
            </div>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img
                src={filmData.posterImage}
                alt={`${filmData.name} poster`}
                width="218"
                height="327"
              />
            </div>
            <FilmTabs reviews={reviews} {...filmData} />
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <FilmList data={suggestions} />
        </section>
        <Footer />
      </div>
    </>
  );
}
