import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export default class ProfileDetails {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 25 })
  firstName: string;

  @Column({ length: 25 })
  lastName: string;

  @Index({ unique: true })
  @Column()
  email: string;

  @Column('text')
  bio: string;

  @Column()
  github: string;

  @Column()
  twitter: string;

  @Column()
  website: string;

  @Column('simple-array')
  extraLinks: string[];
}