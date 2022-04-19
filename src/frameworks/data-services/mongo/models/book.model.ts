import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { AuthorModel, GenreModel } from './';

export type BookDocument = BookModel & Document;
@Schema()
export class BookModel {
  @Prop({ type: String })
  title: string;

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: 'AuthorModel',
    required: true,
  })
  author: AuthorModel;

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: 'GenreModel',
    required: true,
  })
  genre: GenreModel;

  @Prop()
  publish_date: Date;
}

export const BookSchema = SchemaFactory.createForClass(BookModel);
