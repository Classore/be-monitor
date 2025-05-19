import { Entity, Column, OneToMany } from 'typeorm';
import { SharedEntity } from '../common/model/sharedEntity';
import {
  SignupChannel,
  WaitlistType,
  YesOrNo,
} from '../common/enums/index.enum';
import Wallet from './wallet.entity';

@Entity()
export default class User extends SharedEntity {
  @Column()
  first_name: string;

  @Column()
  last_name: string;

  @Column()
  email: string;

  @Column({ nullable: true })
  phone_number: string;

  @Column()
  password: string;

  @Column({ nullable: true })
  description: string;

  @Column({ nullable: true })
  access_token: string;

  @Column({ nullable: true })
  referral_code: string;

  @Column({ nullable: true })
  profile_image: string;

  @Column({ default: false })
  is_verified: boolean;

  @Column({ default: false })
  chosen_study_plan: boolean;

  @Column({ default: WaitlistType.STUDENT })
  user_type: string;

  @Column({ type: 'uuid', nullable: true })
  wallet_id: string;

  @Column({ type: 'uuid', nullable: true })
  leaderboard_id: string;

  @Column({ default: SignupChannel.DEFAULT })
  sign_up_channel: string;

  wallet?: Wallet;

  @Column({ type: 'uuid', array: true, nullable: true, default: [] })
  my_wards?: string[];

  @Column({ type: 'uuid', nullable: true })
  parent: string;

  @Column({ type: 'date', nullable: true })
  birthday: Date;

  @Column({ type: 'text', nullable: true })
  reason_for_account_delete?: string;

  @Column({ nullable: true })
  player_id: string;
}
