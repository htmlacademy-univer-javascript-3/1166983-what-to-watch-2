export interface FilmPreview {
  id: string;
  name: string;
  previewImage: string;
  previewVideoLink: string;
  genre: string;
}

export interface FilmDetails extends Omit<FilmPreview, 'previewImage' | 'previewVideoLink'> {
  posterImage: string;
  backgroundImage: string;
  backgroundColor?: string;
  videoLink: string;
  description?: string;
  rating?: number;
  scoresCount?: number;
  director?: string;
  starring?: string[];
  runTime?: number;
  released: number;
  isFavorite: boolean;
}

export enum FilmPageTabs {
  Overview = 'Overview',
  Details = 'Details',
  Reviews = 'Reviews',
}
