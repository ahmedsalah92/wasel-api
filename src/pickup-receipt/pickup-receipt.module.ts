import { Module } from '@nestjs/common';
import { PickupReceiptController } from './pickup-receipt.controller';
import { PickupReceiptService } from './pickup-receipt.service';

@Module({
  controllers: [PickupReceiptController],
  providers: [PickupReceiptService]
})
export class PickupReceiptModule {}
