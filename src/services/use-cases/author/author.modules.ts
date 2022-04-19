import { Module } from '@nestjs/common';
import { DataServicesModule } from 'src/services/data-services/data-services.modules';
import { AuthorFactoryService } from './author-factory.services';
import { AuthorServices } from './author-services.services';

@Module({
  imports: [DataServicesModule],
  providers: [AuthorServices, AuthorFactoryService],
  exports: [AuthorServices, AuthorFactoryService],
})
export class AuthorServicesModule {}
