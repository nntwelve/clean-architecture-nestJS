import { Injectable } from '@nestjs/common';
import { Book } from 'src/core';
import { ICrmServices, IDataServices } from 'src/core/abstracts';
import { CreateNewBookDto } from 'src/core/dtos';
import { BookFactoryService } from './book-factory.services';

@Injectable()
export class BookSerivces {
  constructor(
    private data_servies: IDataServices,
    private book_factory: BookFactoryService,
    private crm_services: ICrmServices,
  ) {
    console.log(this.data_servies)
  }

  

  getAllBook(): Promise<Book[]> {
    return this.data_servies.books.getAll();
  }

  getBookById(id: string): Promise<Book> {
    return this.data_servies.books.get(id);
  }
  async create(createNewBookDto: CreateNewBookDto) {
    const book = this.book_factory.createNewBook(createNewBookDto);
    const created_book = await this.data_servies.books.create(book);
    await this.crm_services.bookAdded(created_book);
    return created_book;
  }
}
