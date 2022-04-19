import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IDataServices } from 'src/core/abstracts';
import {
  AuthorDocument,
  AuthorModel,
  BookDocument,
  BookModel,
  GenreDocument,
  GenreModel,
} from './models';
import { MongoGenericRepository } from './mongo-generic-repository';

@Injectable()
export class MongoDataServices
  implements IDataServices, OnApplicationBootstrap
{
  authors: MongoGenericRepository<AuthorModel>;
  books: MongoGenericRepository<BookModel>;
  genres: MongoGenericRepository<GenreModel>;

  constructor(
    @InjectModel(AuthorModel.name)
    private author_repository: Model<AuthorDocument>,
    @InjectModel(BookModel.name)
    private book_repository: Model<BookDocument>,
    @InjectModel(GenreModel.name)
    private genre_repository: Model<GenreDocument>,
  ) {}

  onApplicationBootstrap() {
    this.authors = new MongoGenericRepository<AuthorModel>(
      this.author_repository,
    );
    this.books = new MongoGenericRepository<BookModel>(this.book_repository);
    this.genres = new MongoGenericRepository<GenreModel>(this.genre_repository);
  }
}
