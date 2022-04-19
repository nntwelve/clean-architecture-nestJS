import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type AuthorDocument = AuthorModel & Document;
@Schema()
export class AuthorModel {
  @Prop({ type: String })
  first_name: string;

  @Prop({ type: String })
  last_name: string;
}

export const AuthorSchema = SchemaFactory.createForClass(AuthorModel);
