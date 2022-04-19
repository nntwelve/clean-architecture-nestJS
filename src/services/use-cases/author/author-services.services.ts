import { Injectable } from '@nestjs/common';
import { Author } from 'src/core';
import { IDataServices } from 'src/core/abstracts';
import { CreateNewAuthorDto } from 'src/core/dtos';
import { AuthorFactoryService } from './author-factory.services';

@Injectable()
export class AuthorServices {
  constructor(
    private data_services: IDataServices,
    private author_factory: AuthorFactoryService,
  ) {}

  async createAuthor(createNewAuthorDto: CreateNewAuthorDto): Promise<Author> {
    const author = this.author_factory.createNewAuthor(createNewAuthorDto);
    return this.data_services.authors.create(author);
  }
}
