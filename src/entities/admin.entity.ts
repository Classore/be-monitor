import { Entity, Column, ManyToOne, JoinColumn } from 'typeorm';
import { SharedEntity } from '../common/model/sharedEntity';
import { Role } from '../entities';

@Entity()
export default class Admin extends SharedEntity {
  @Column()
  first_name: string;

  @Column()
  last_name: string;

  @Column({ nullable: true })
  phone_number: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column({ nullable: true })
  access_token?: string;

  @Column({ nullable: true })
  referal_code?: string;

  @Column({ type: 'uuid', nullable: true })
  wallet_id?: string;

  @ManyToOne(() => Role, (role) => {})
  @JoinColumn()
  role: Role;

  @Column({ nullable: true })
  player_id: string;

  @Column({ type: 'decimal', default: 0.5 })
  referral_percentage_for_marketers: number;
}
