import Footer from '../../components/footer';
import Header from '../../components/header';
import { Link } from 'react-router-dom';
import { AppRoutes } from '../../types/routes.tsx';
import FilmList from '../../components/film-list';
import { FilmDetails, FilmPageTabs, FilmPreview } from '../../types/film.tsx';
import classNames from 'classnames';
import { useState } from 'react';

interface FilmProps extends FilmDetails {
  suggestions: FilmPreview [];
}

export default function Film({ id, name, genre, released, suggestions }: FilmProps) {
  const [selectedTab, setSelectedTab] = useState<FilmPageTabs>(FilmPageTabs.Overview);

  return (
    <>
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel" />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <Header className="film-card__head">
            <Header.Logo />
            <Header.UserBlock />
          </Header>

          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{genre}</span>
                <span className="film-card__year">{released}</span>
              </p>

              <div className="film-card__buttons">
                <button className="btn btn--play film-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list film-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                  <span className="film-card__count">9</span>
                </button>
                <Link
                  to={AppRoutes.AddReview.replace(':id', id)}
                  className="btn film-card__button"
                >
                  Add review
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img
                src="img/the-grand-budapest-hotel-poster.jpg"
                alt="The Grand Budapest Hotel poster"
                width="218"
                height="327"
              />
            </div>

            <div className="film-card__desc">
              <nav className="film-nav film-card__nav">
                <ul className="film-nav__list">
                  {Object.values(FilmPageTabs).map((tab) => (
                    <li
                      key={tab}
                      className={classNames('film-nav__item', tab === selectedTab && 'film-nav__item--active')}
                      onClick={() => setSelectedTab(tab)}
                    >
                      <span className="film-nav__link">{tab}</span>
                    </li>
                  ))}
                </ul>
              </nav>

              <div className="film-rating">
                <div className="film-rating__score">8,9</div>
                <p className="film-rating__meta">
                  <span className="film-rating__level">Very good</span>
                  <span className="film-rating__count">240 ratings</span>
                </p>
              </div>

              <div className="film-card__text">
                <p>
                  In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge
                  Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave&apos;s friend and protege.
                </p>

                <p>
                  Gustave prides himself on providing first-className service to the hotel&apos;s guests, including
                  satisfying the sexual needs of the many elderly women who stay there. When one of Gustave&apos;s
                  lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief
                  suspect in her murder.
                </p>

                <p className="film-card__director"><strong>Director: Wes Anderson</strong></p>

                <p className="film-card__starring">
                  <strong>Starring: Bill Murray, Edward Norton, Jude Law, Willem Dafoe and other</strong>
                </p>
              </div>
            </div>
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
