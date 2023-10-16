import type { FilmDetails, FilmPreview } from '../../types/film.ts';
import Footer from '../../components/footer';
import FilmList from '../../components/film-list';
import Header from '../../components/header';
import FilmControls from '../../components/film-controls';
import { useEffect } from 'react';
import { setFilms } from '../../store/action.ts';
import { useAppDispatch, useAppSelector } from '../../hooks';
import GenreList from './genre-list';
import ShowMoreButton from './show-more-button';

interface MainProps {
  selectedFilm: FilmDetails;
  films: FilmPreview[];
}

export default function Main({ selectedFilm, films }: MainProps) {
  const { filmListPortion } = useAppSelector((state) => state.film);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setFilms(films));
  }, [dispatch, films]);

  return (
    <>
      <section className="film-card">
        <div className="film-card__bg">
          <img src={selectedFilm.backgroundImage} alt={selectedFilm.name} />
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
                src={selectedFilm.posterImage}
                alt={`${selectedFilm.name} poster`}
                width="218"
                height="327"
              />
            </div>

            <div className="film-card__desc">
              <h2 className="film-card__title">{selectedFilm.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{selectedFilm.genre}</span>
                <span className="film-card__year">{selectedFilm.released}</span>
              </p>

              <FilmControls>
                <FilmControls.PlayLink id={selectedFilm.id} />
                <FilmControls.MyListButton />
              </FilmControls>
            </div>
          </div>
        </div>
      </section>

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
  );
}
