export interface FilmPreview {
  id: number;
  title: string;
  image: string;
}

export interface FilmDetails extends FilmPreview {
  genre: string;
  releaseYear: number;
  backgroundImage: string;
}

export enum FilmPageTabs {
  Overview = 'Overview',
  Details = 'Details',
  Reviews = 'Reviews',
}
