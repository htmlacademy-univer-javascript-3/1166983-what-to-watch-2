import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../../hooks';
import classNames from 'classnames';
import { setSelectedGenre } from '../../../store/action.ts';

export default function GenreList() {
  const { genres, selectedGenre } = useAppSelector((state) => state.film);
  const dispatch = useDispatch();

  return (
    <ul className="catalog__genres-list">
      {genres.map((genre) => (
        <li
          key={genre}
          className={classNames('catalog__genres-item', genre === selectedGenre && 'catalog__genres-item--active')}
          onClick={() => dispatch(setSelectedGenre(genre))}
        >
          <span className="catalog__genres-link">{genre}</span>
        </li>
      ))}
    </ul>
  );
}
