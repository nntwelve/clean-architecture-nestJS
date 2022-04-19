import { Module } from '@nestjs/common';
import { CrmServicesModule } from 'src/services/crm-services/crm-services.modules';
import { DataServicesModule } from 'src/services/data-services/data-services.modules';
import { BookFactoryService } from './book-factory.services';
import { BookSerivces } from './book-services.services';

@Module({
  imports: [DataServicesModule, CrmServicesModule],
  providers: [BookSerivces, BookFactoryService],
  exports: [BookSerivces, BookFactoryService],
})
export class BookServicesModule {}
