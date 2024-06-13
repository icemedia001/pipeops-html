import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Donor } from './donor.entity';

@Injectable()
export class DonorsService {
  constructor(
    @InjectRepository(Donor)
    private donorsRepository: Repository<Donor>,
  ) {}

  findAll(): Promise<Donor[]> {
    return this.donorsRepository.find();
  }

  findOne(id: number): Promise<Donor> {
    return this.donorsRepository.findOne({ where: { id } });
  }
}
