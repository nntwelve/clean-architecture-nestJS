import { Module } from '@nestjs/common';
import { ICrmServices } from 'src/core/abstracts';

import { SalesforceService } from './salesforce-service.services';

@Module({
  providers: [
    {
      provide: ICrmServices,
      useClass: SalesforceService,
    },
  ],
  exports: [ICrmServices],
})
export class SalesforceServicesModule {}