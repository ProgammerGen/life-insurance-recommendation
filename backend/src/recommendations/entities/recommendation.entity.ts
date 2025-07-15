import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Recommendation {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  age: number;

  @Column()
  income: number;

  @Column()
  dependents: number;

  @Column()
  risk: 'Low' | 'Medium' | 'High';

  @Column()
  plan: string;

  @Column()
  explanation: string;
}
