import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { RSO } from '../rso/rso.entity';
import { Event } from '../event/event.entity';

@Entity()
export class University {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  location: string;

  @Column()
  description: string;

  @Column()
  numStudents: number;

  @OneToMany(() => RSO, (rso) => rso.university)
  rsos: RSO[];

  @OneToMany(() => Event, (event) => event.university)
  events: Event[];
}
