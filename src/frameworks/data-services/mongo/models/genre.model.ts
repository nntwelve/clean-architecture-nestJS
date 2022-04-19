import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type GenreDocument = GenreModel & Document;
@Schema()
export class GenreModel {
  @Prop({ type: String })
  name: string;
}

export const GenreSchema = SchemaFactory.createForClass(GenreModel);
