import { Book } from '../entities';

export class CreateBookResponse {
  success: boolean;

  created_book: Book;
}
