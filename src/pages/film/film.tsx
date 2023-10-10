import Footer from '../../components/footer';
import Header from '../../components/header';
import FilmList from '../../components/film-list';
import { FilmDetails, FilmPageTabs, FilmPreview } from '../../types/film.ts';
import classNames from 'classnames';
import { useMemo, useState } from 'react';
import { getRatingDescription } from '../../utils/film.ts';
import FilmControls from '../../components/film-controls';

interface FilmProps extends FilmDetails {
  suggestions: FilmPreview [];
}

export default function Film({
  id,
  name,
  genre,
  backgroundImage,
  posterImage,
  rating,
  description,
  director,
  starring,
  scoresCount,
  released,
  suggestions
}: FilmProps) {
  const [selectedTab, setSelectedTab] = useState<FilmPageTabs>(FilmPageTabs.Overview);
  const ratingDescription = useMemo(() => getRatingDescription(rating), [rating]);

  return (
    <>
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={backgroundImage} alt={name} />
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

              <FilmControls >
                <FilmControls.PlayLink id={id} />
                <FilmControls.MyListButton />
                <FilmControls.AddReviewLink id={id} />
              </FilmControls>
            </div>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img
                src={posterImage}
                alt={`${name} poster`}
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
                <div className="film-rating__score">{rating}</div>
                <p className="film-rating__meta">
                  <span className="film-rating__level">{ratingDescription}</span>
                  <span className="film-rating__count">{scoresCount} ratings</span>
                </p>
              </div>

              <div className="film-card__text">
                <p>
                  {description}
                </p>
                <p className="film-card__director"><strong>Director: {director}</strong></p>

                <p className="film-card__starring">
                  <strong>Starring: {starring?.join(', ')}</strong>
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
