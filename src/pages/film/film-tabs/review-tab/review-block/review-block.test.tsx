import { render, screen } from '@testing-library/react';
import { expect } from 'vitest';
import ReviewBlock from './index.tsx';
import { mockReview } from '../../../../../utils/mock-data.ts';
import { formatDate } from '../../../../../utils/format.ts';
import { DateFormats } from '../../../../../types/date.ts';

describe('Component: ReviewBlock', () => {
  const mockedReview = mockReview();

  it('should render correctly', () => {
    render(<ReviewBlock {...mockedReview} />);
    expect(screen.getByTestId('review-block')).toBeInTheDocument();
    expect(screen.getByText(mockedReview.comment)).toBeInTheDocument();
    expect(screen.getByText(mockedReview.rating)).toBeInTheDocument();
    expect(screen.getByText(mockedReview.user)).toBeInTheDocument();
    expect(screen.getByText(formatDate(mockedReview.date, DateFormats.Standard))).toBeInTheDocument();
  });
});
