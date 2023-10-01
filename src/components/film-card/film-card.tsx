import type { FilmPreview } from '../../types/film.tsx';

interface FilmCardProps extends FilmPreview {
  onHover: (id: number) => void;
}

export default function FilmCard({id, title, image, onHover}: FilmCardProps) {
  return (
    <article className="small-film-card catalog__films-card" onMouseOver={() => onHover(id)}>
      <div className="small-film-card__image">
        <img src={image} alt={title} width="280" height="175" />
      </div>
      <h3 className="small-film-card__title">
        <a className="small-film-card__link" href="film-page.html">{title}</a>
      </h3>
    </article>
  );
}
