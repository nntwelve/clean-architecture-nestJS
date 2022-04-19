import { Author, Book, Genre } from '../entities';
import { IGenericRepository } from './generic-repository.abstracts';

export abstract class IDataServices {
  abstract books: IGenericRepository<Book>;

  abstract authors: IGenericRepository<Author>;

  abstract genres: IGenericRepository<Genre>;
}
