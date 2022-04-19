import { Body, Controller, Get, Logger, Param, Post } from '@nestjs/common';
import { CreateBookResponse, CreateNewBookDto } from 'src/core/dtos';
import { BookSerivces } from 'src/services';

@Controller('/api/books')
export class BookControllers {
  logger = new Logger('BookControllers');
  constructor(private book_services: BookSerivces) {}

  @Get()
  async getAll() {
    return this.book_services.getAllBook();
  }

  @Get(':id')
  async getById(@Param() id: string) {
    return this.book_services.getBookById(id);
  }

  @Post()
  async createBook(@Body() createBookDto: CreateNewBookDto) {
    const create_book_response = new CreateBookResponse();
    try {
      const created_book = await this.book_services.create(createBookDto);

      create_book_response.success = true;
      create_book_response.created_book = created_book;
    } catch (error) {
      this.logger.error(error);
      create_book_response.success = false;
    }

    return create_book_response;
  }
}
