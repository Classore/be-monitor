import { Entity, Column } from 'typeorm';
import { SharedEntity } from '../common/model/sharedEntity';

@Entity()
export default class ActivityLog extends SharedEntity {
  @Column()
  type: string;

  @Column({ type: 'uuid', nullable: true })
  user_id: string;

  @Column({ type: 'text', nullable: true })
  description: string;

  @Column({ type: 'boolean', default: true })
  is_successful: boolean;

  @Column('jsonb', { nullable: true })
  meta: any;
}
