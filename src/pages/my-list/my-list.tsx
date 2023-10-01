import Footer from '../../components/footer';
import Header from '../../components/header';
import FilmList from '../../components/film-list';
import { FilmPreview } from '../../types/film.tsx';

interface FilmListProps {
  films: FilmPreview [];
}

export default function MyList({films}: FilmListProps) {
  return (
    <div className="user-page">
      <Header className="user-page__head">
        <Header.Logo />
        <h1 className="page-title user-page__title">My list <span className="user-page__film-count">9</span></h1>
        <Header.UserBlock />
      </Header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <FilmList data={films} />
      </section>
      <Footer />
    </div>
  );
}
