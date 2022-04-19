import { Controller, Post } from '@nestjs/common';
import { CreateAuthorResponse, CreateNewAuthorDto } from 'src/core/dtos';
import { AuthorServices } from 'src/services';

@Controller('api/authors')
export class AuthorControllers {
  /**
   *
   */
  constructor(private author_services: AuthorServices) {}

  @Post()
  async createAuthor(createAuthorDto: CreateNewAuthorDto) {
    const create_author_response = new CreateAuthorResponse();
    try {
      const author = await this.author_services.createAuthor(createAuthorDto);

      create_author_response.success = true;
      create_author_response.created_author = author;
    } catch (error) {
      create_author_response.success = false;
    }

    return create_author_response;
  }
}
