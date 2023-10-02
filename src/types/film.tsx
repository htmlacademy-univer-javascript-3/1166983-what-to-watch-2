export interface FilmPreview {
  id: number;
  name: string;
  previewImage: string;
  genre: string;
}

export interface FilmDetails extends FilmPreview {
  released: number;
  backgroundImage: string;
}

export enum FilmPageTabs {
  Overview = 'Overview',
  Details = 'Details',
  Reviews = 'Reviews',
}
