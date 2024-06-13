import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DonorsModule } from './donors/donors.module';
import { BloodBanksModule } from './blood-banks/blood-banks.module';
import { Donor } from './donors/donor.entity';
import { BloodBank } from './blood-banks/blood-bank.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 7500,
      username: '',
      password: '',
      database: 'blood_bank',
      entities: [Donor, BloodBank],
      synchronize: true,
    }),
    DonorsModule,
    BloodBanksModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
