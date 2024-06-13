import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BloodBank } from './blood-bank.entity';

@Injectable()
export class BloodBanksService {
  constructor(
    @InjectRepository(BloodBank)
    private bloodBanksRepository: Repository<BloodBank>,
  ) {}

  findAll(): Promise<BloodBank[]> {
    return this.bloodBanksRepository.find();
  }

  findOne(id: number): Promise<BloodBank> {
    return this.bloodBanksRepository.findOne({ where: { id } });
  }
}
