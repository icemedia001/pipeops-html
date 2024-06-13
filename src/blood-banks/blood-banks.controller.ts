import { Controller, Get, Param } from '@nestjs/common';
import { BloodBanksService } from './blood-banks.service';
import { BloodBank } from './blood-bank.entity';

@Controller('blood-banks')
export class BloodBanksController {
  constructor(private readonly bloodBanksService: BloodBanksService) {}

  @Get()
  findAll(): Promise<BloodBank[]> {
    return this.bloodBanksService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<BloodBank> {
    return this.bloodBanksService.findOne(+id);
  }
}
