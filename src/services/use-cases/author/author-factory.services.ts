import { Injectable } from '@nestjs/common';
import { Author } from 'src/core';
import { CreateNewAuthorDto } from 'src/core/dtos';

@Injectable()
export class AuthorFactoryService {
  createNewAuthor(createNewAuthorDto: CreateNewAuthorDto) {
    const author = new Author();
    author.first_name = createNewAuthorDto.first_name;
    author.last_name = createNewAuthorDto.last_name;

    return author;
  }
}
