import { useEffect, useRef, useState } from 'react';
import FilmCard from '../film-card';
import type { FilmPreview } from '../../types/film.ts';

interface FilmListProps {
  data: FilmPreview[];
}

export default function FilmList({ data }: FilmListProps) {
  const [activeCardId, setActiveCardId] = useState<string>('');
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  function handleCardHover(filmId: string) {
    if (filmId) {
      timeoutRef.current = setTimeout(() => setActiveCardId(filmId), 1000);
    } else if (timeoutRef.current) {
      setActiveCardId('');
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }, []);

  return (
    <div className="catalog__films-list">
      {data.map((value) => (
        <FilmCard key={value.id} {...value} onHover={handleCardHover} isActive={activeCardId === value.id}/>
      ))}
    </div>
  );
}
