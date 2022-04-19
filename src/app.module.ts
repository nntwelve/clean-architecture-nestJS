import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthorControllers, BookControllers } from './controllers';
import { CrmServicesModule } from './services/crm-services/crm-services.modules';
import { DataServicesModule } from './services/data-services/data-services.modules';
import { AuthorServicesModule } from './services/use-cases/author/author.modules';
import { BookServicesModule } from './services/use-cases/book/book.modules';

@Module({
  imports: [
    DataServicesModule,
    BookServicesModule,
    AuthorServicesModule,
    CrmServicesModule,
  ],
  controllers: [AppController, BookControllers, AuthorControllers],
  providers: [AppService],
})
export class AppModule {}
