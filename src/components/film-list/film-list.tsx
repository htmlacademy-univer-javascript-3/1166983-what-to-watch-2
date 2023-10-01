import { useState } from 'react';
import FilmCard from '../film-card';
import type { FilmPreview } from '../../types/film.tsx';

interface FilmListProps {
  data: FilmPreview[];
}

export default function FilmList({ data }: FilmListProps) {
  const [, setActiveFilmCard] = useState<number>(0);

  return (
    <div className="catalog__films-list">
      {data.map(({ id, title, image }) => (
        <FilmCard key={id} id={id} title={title} image={image} onHover={setActiveFilmCard} />
      ))}
    </div>
  );
}