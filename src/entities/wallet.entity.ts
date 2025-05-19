import { Entity, Column } from 'typeorm';
import { SharedEntity } from '../common/model/sharedEntity';
import {
  TransactionCurrency,
  TransactionStatus,
  TransactionType,
} from '../common/enums/index.enum';

@Entity()
export default class Wallet extends SharedEntity {
  @Column({ type: 'uuid', nullable: true })
  user_id?: string;

  @Column({ type: 'uuid', nullable: true })
  admin_id?: string;

  @Column({ nullable: false, default: 0 })
  current_balance: number;

  @Column({
    type: 'enum',
    enum: TransactionCurrency,
    nullable: true,
    default: TransactionCurrency.NGN,
  })
  currency: string;
}
