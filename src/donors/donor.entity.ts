import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Donor {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  bloodType: string;

  @Column()
  lastDonationDate: Date;
}
