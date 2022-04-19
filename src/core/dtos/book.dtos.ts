import { PartialType } from '@nestjs/mapped-types';
import { IsDate, IsNotEmpty, IsString } from 'class-validator';

export class CreateNewBookDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  author_id: any;

  @IsNotEmpty()
  genre_id: any;

  @IsDate()
  publish_date: Date;
}

export class UpdateBookDto extends PartialType(CreateNewBookDto) {}
