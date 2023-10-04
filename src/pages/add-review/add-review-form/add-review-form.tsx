import React, { useState } from 'react';

interface FormFields {
  rating: number;
  text: string;
}

const RATING_OPTIONS = Array.from({ length: 10 }, (_, i) => i + 1).reverse();

const INITIAL_FORM_STATE: FormFields = {
  rating: 0,
  text: '',
};

export default function AddReviewForm() {
  const [, setFormValues] = useState<FormFields>(INITIAL_FORM_STATE);

  function handleFormChange(updatedValues: Partial<FormFields>) {
    setFormValues((values) => ({ ...values, ...updatedValues }));
  }

  return (
    <form action="#" className="add-review__form">
      <div className="rating">
        <div className="rating__stars">
          {RATING_OPTIONS.map((value) => (
            <React.Fragment key={value}>
              <input
                className="rating__input"
                id={`star-${value}`}
                type="radio"
                name="rating"
                value={value}
                onClick={() => handleFormChange({ rating: value })}
              />
              <label className="rating__label" htmlFor={`star-${value}`}>Rating {value}</label>
            </React.Fragment>
          ))}
        </div>
      </div>

      <div className="add-review__text">
        <textarea
          className="add-review__textarea"
          name="review-text"
          id="review-text"
          placeholder="Review text"
          onChange={(event) => handleFormChange({ text: event.target.value })}
        />
        <div className="add-review__submit">
          <button className="add-review__btn" type="submit">Post</button>
        </div>

      </div>
    </form>
  );
}
