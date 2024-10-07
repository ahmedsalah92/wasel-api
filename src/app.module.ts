import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ClientModule } from './client/client.module';
import { AdminModule } from './admin/admin.module';
import { CourierModule } from './courier/courier.module';
import { PackageModule } from './package/package.module';
import { ShipmentModule } from './shipment/shipment.module';
import { ProofOfDeliveryModule } from './proof-of-delivery/proof-of-delivery.module';
import { PickupReceiptModule } from './pickup-receipt/pickup-receipt.module';
import { PackageTypeModule } from './package-type/package-type.module';
import { MeasurementUnitModule } from './measurement-unit/measurement-unit.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ClientModule,
    AdminModule,
    CourierModule,
    PackageModule,
    ShipmentModule,
    ProofOfDeliveryModule,
    PickupReceiptModule,
    PackageTypeModule,
    MeasurementUnitModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
