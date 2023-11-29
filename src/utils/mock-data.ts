import { FilmDetails } from '../types/film.ts';
import * as faker from 'faker';
import { UserData } from '../types/user.ts';

export function mockFilmDetails(): FilmDetails {
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
  });
}

export function mockUserDetails(): UserData {
  return ({
    name: faker.name.findName(),
    avatarUrl: faker.image.imageUrl(),
    email: faker.internet.email(),
    token: faker.datatype.string(),
  });
}


