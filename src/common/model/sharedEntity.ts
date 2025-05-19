import {
  PrimaryGeneratedColumn,
  Column,
  BeforeUpdate,
  DeleteDateColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

export abstract class SharedEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'uuid', nullable: true })
  copied_from?: string;

  @CreateDateColumn({ type: 'timestamp with time zone' })
  createdOn: Date;

  @UpdateDateColumn({ type: 'timestamp with time zone' })
  updatedOn: Date;

  @Column({ nullable: true })
  updatedBy?: string;

  @Column({ nullable: true, type: 'timestamp' })
  @DeleteDateColumn({ type: 'timestamp with time zone' })
  deletedOn?: Date;

  @Column({ nullable: true })
  deletedBy?: string;

  @Column({ default: false, nullable: true })
  isDeleted: boolean;

  @Column({ default: false, nullable: true })
  isBlocked: boolean;
  /**
   *
   */

  // @BeforeUpdate()
  // updateDates() {
  //   this.updatedOn = new Date();
  // }
}
