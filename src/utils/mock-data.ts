import { FilmDetails, FilmPreview } from '../types/film.ts';
import * as faker from 'faker';
import { UserData } from '../types/user.ts';
import { VideoPlayerProps } from '../components/video-player/video-player.tsx';

export function mockFilmDetails(): FilmDetails & FilmPreview {
  return ({
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    genre: faker.music.genre(),
    posterImage: faker.image.imageUrl(),
    backgroundImage: faker.image.imageUrl(),
    backgroundColor: faker.internet.color(),
    videoLink: faker.internet.url(),
    description: faker.image.imageUrl(),
    rating: faker.datatype.number(),
    scoresCount: faker.datatype.number(),
    director: faker.name.findName(),
    starring: Array.from({length: 10}, () => faker.name.findName()),
    runTime: faker.datatype.number(),
    released: faker.datatype.number(),
    isFavorite: faker.datatype.boolean(),
    previewImage: faker.image.imageUrl(),
    previewVideoLink: faker.internet.url(),
  });
}

export function mockFilmArray(): (FilmDetails & FilmPreview)[] {
  const arrayLength = faker.datatype.number({max: 20});
  return Array.from({length: arrayLength}, () => mockFilmDetails());
}

export function mockUserDetails(): UserData {
  return ({
    name: faker.name.findName(),
    avatarUrl: faker.image.imageUrl(),
    email: faker.internet.email(),
    token: faker.datatype.string(),
  });
}

export function mockPlayerDetails(): VideoPlayerProps {
  return ({
    posterImage: faker.image.imageUrl(),
    videoLink: faker.internet.url(),
  });
}

