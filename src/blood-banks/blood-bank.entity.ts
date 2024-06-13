import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class BloodBank {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  location: string;
}
