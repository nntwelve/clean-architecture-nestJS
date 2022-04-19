import { Author } from '../entities';

export class CreateAuthorResponse {
  success: boolean;

  created_author: Author;
}
