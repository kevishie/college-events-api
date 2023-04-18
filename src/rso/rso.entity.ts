import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { University } from '../university/university.entity';
import { Event } from '../event/event.entity';

@Entity('rso')
export class RSO {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @ManyToOne(() => University, (university) => university.rsos, {
    nullable: false,
    onDelete: 'CASCADE',
  })
  university: University;

  @OneToMany(() => Event, (event) => event.rso)
  events: Event[];
}
