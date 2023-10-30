import Footer from '../../components/footer';
import FilmList from '../../components/film-list';
import Header from '../../components/header';
import FilmControls from '../../components/film-controls';
import { useAppDispatch, useAppSelector } from '../../hooks';
import GenreList from './genre-list';
import ShowMoreButton from './show-more-button';
import RequestSuspense from '../../components/request-suspense';
import { useEffect } from 'react';
import { loadPromoFilm } from '../../store/api-actions.ts';

export default function Main() {
  const { filmListPortion, promoFilm } = useAppSelector((state) => state.film);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(loadPromoFilm());
  }, [dispatch]);

  return (
    <RequestSuspense>
      <>
        {promoFilm && (
          <section className="film-card">
            <div className="film-card__bg">
              <img src={promoFilm.backgroundImage} alt={promoFilm.name} />
            </div>

            <h1 className="visually-hidden">WTW</h1>

            <Header className="film-card__head">
              <Header.Logo />
              <Header.UserBlock />
            </Header>

            <div className="film-card__wrap">
              <div className="film-card__info">
                <div className="film-card__poster">
                  <img
                    src={promoFilm.posterImage}
                    alt={`${promoFilm.name} poster`}
                    width="218"
                    height="327"
                  />
                </div>

                <div className="film-card__desc">
                  <h2 className="film-card__title">{promoFilm.name}</h2>
                  <p className="film-card__meta">
                    <span className="film-card__genre">{promoFilm.genre}</span>
                    <span className="film-card__year">{promoFilm.released}</span>
                  </p>

                  <FilmControls>
                    <FilmControls.PlayLink id={promoFilm.id} />
                    <FilmControls.MyListButton />
                  </FilmControls>
                </div>
              </div>
            </div>
          </section>
        )}

        <div className="page-content">
          <section className="catalog">
            <h2 className="catalog__title visually-hidden">Catalog</h2>

            <GenreList />

            <FilmList data={filmListPortion} />

            <ShowMoreButton />
          </section>
          <Footer />
        </div>
      </>
    </RequestSuspense>
  );
}
