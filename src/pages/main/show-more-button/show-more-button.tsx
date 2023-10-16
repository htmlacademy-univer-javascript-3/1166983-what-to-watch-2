import { useAppDispatch, useAppSelector } from '../../../hooks';
import { showMoreFilms } from '../../../store/action.ts';

export default function ShowMoreButton() {
  const { filteredFilms, filmListMaxLength } = useAppSelector((state) => state.film);
  const dispatch = useAppDispatch();

  if (filteredFilms.length <= filmListMaxLength) {
    return null;
  }

  return (
    <div className="catalog__more">
      <button className="catalog__button" type="button" onClick={() => dispatch(showMoreFilms())}>
        Show more
      </button>
    </div>
  );
}
