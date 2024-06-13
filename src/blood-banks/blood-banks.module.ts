import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BloodBank } from './blood-bank.entity';
import { BloodBanksService } from './blood-banks.service';
import { BloodBanksController } from './blood-banks.controller';

@Module({
  imports: [TypeOrmModule.forFeature([BloodBank])],
  providers: [BloodBanksService],
  controllers: [BloodBanksController],
})
export class BloodBanksModule {}
