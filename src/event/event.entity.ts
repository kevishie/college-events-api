import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { RSO } from '../rso/rso.entity';
import { University } from '../university/university.entity';
import { User } from '../users/user.entity';
import { Comment } from '../comment/comment.entity';

@Entity()
export class Event {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  eventCategory: string;

  @Column()
  time: string;

  @Column()
  date: Date;

  @Column()
  location: string;

  @Column()
  contactPhone: string;

  @Column()
  contactEmail: string;

  @Column({ default: false })
  isPublic: boolean;

  @ManyToOne(() => User, (user) => user.events)
  user: User;

  @ManyToOne(() => RSO, (rso) => rso.events)
  rso: RSO;

  @ManyToOne(() => University, (university) => university.events)
  university: University;

  @OneToMany(() => Comment, (comment) => comment.event)
  comments: Comment[];
}
