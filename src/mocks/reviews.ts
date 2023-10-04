import { Review } from '../types/review.ts';

export const REVIEWS_MOCK: Review[] = [
  {
    id: '1',
    date: '2023-05-25T12:00:00.000Z',
    user: 'Kate Muir',
    comment: 'Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director\'s funniest and most exquisitely designed movies in years.',
    rating: 8.9
  },
  {
    id: '2',
    date: '2023-05-25T12:00:00.000Z',
    user: 'Bill Goodykoontz',
    comment: 'Anderson\'s films are too precious for some, but for those of us willing to lose ourselves in them, they\'re a delight. "The Grand Budapest Hotel" is no different, except that he has added a hint of gravitas to the mix, improving the recipe.',
    rating: 8
  },
  {
    id: '3',
    date: '2023-05-25T12:00:00.000Z',
    user: 'Amanda Greever',
    comment: 'I didn\'t find it amusing, and while I can appreciate the creativity, it\'s an hour and 40 minutes I wish I could take back.',
    rating: 8
  }
];
