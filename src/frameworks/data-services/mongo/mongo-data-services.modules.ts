import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { IDataServices } from 'src/core/abstracts';
import {
  AuthorModel,
  AuthorSchema,
  BookModel,
  BookSchema,
  GenreModel,
  GenreSchema,
} from './models';
import { MongoDataServices } from './mongo-data-services.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: AuthorModel.name, schema: AuthorSchema },
      { name: BookModel.name, schema: BookSchema },
      { name: GenreModel.name, schema: GenreSchema },
    ]),
    MongooseModule.forRoot(process.env.MONGO_URL),
  ],
  providers: [
    {
      provide: IDataServices,
      useClass: MongoDataServices,
    },
  ],
  exports: [IDataServices],
})
export class MongoDataServicesModule {}
