import { Module } from '@nestjs/common';
import { SalesforceServicesModule } from '../../frameworks/crm-services/salesforce/salesforce-service.modules';

@Module({
  imports: [SalesforceServicesModule],
  exports: [SalesforceServicesModule],
})
export class CrmServicesModule {}
