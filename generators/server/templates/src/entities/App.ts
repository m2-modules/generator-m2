import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  UpdateDateColumn,
  CreateDateColumn
} from 'typeorm'

@Entity()
export class App {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  name: string

  @Column()
  version: string

  @UpdateDateColumn()
  updatedAt: Date

  @CreateDateColumn()
  createdAt: Date
}
