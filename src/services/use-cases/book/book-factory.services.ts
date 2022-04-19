import { Injectable } from '@nestjs/common';
import { Book } from 'src/core';
import { CreateNewBookDto, UpdateBookDto } from 'src/core/dtos';

@Injectable()
export class BookFactoryService {
  createNewBook(createNewBookDto: CreateNewBookDto) {
    const book = new Book();
    book.author = createNewBookDto.author_id;
    book.genre = createNewBookDto.genre_id;
    book.title = createNewBookDto.title;
    book.publish_date = createNewBookDto.publish_date;
    return book;
  }

  updateBook(updateBookDto: UpdateBookDto) {
    const book = new Book();
    book.author = updateBookDto.author_id;
    book.genre = updateBookDto.genre_id;
    book.title = updateBookDto.title;
    book.publish_date = updateBookDto.publish_date;
    return book;
  }
}
