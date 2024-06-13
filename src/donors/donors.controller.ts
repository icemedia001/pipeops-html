import { Controller, Get, Param } from '@nestjs/common';
import { DonorsService } from './donors.service';
import { Donor } from './donor.entity';

@Controller('donors')
export class DonorsController {
  constructor(private readonly donorsService: DonorsService) {}

  @Get()
  findAll(): Promise<Donor[]> {
    return this.donorsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Donor> {
    return this.donorsService.findOne(+id);
  }
}
