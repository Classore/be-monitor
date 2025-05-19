import { Entity, Column, OneToMany } from 'typeorm';
import { SharedEntity } from '../common/model/sharedEntity';
import { YesOrNo } from '../common/enums/index.enum';
import { Admin } from '../entities';

@Entity()
export default class Role extends SharedEntity {
  @Column()
  name: string;

  @OneToMany(() => Admin, (admin) => admin.role)
  admins: Admin[];

  @Column({ enum: YesOrNo, default: YesOrNo.NO })
  waitlist_read: string;

  @Column({ enum: YesOrNo, default: YesOrNo.NO })
  waitlist_write: string;

  @Column({ enum: YesOrNo, default: YesOrNo.NO })
  student_read: string;

  @Column({ enum: YesOrNo, default: YesOrNo.NO })
  student_write: string;

  @Column({ enum: YesOrNo, default: YesOrNo.NO })
  admin_read: string;

  @Column({ enum: YesOrNo, default: YesOrNo.NO })
  admin_write: string;

  @Column({ enum: YesOrNo, default: YesOrNo.NO })
  tutor_read: string;

  @Column({ enum: YesOrNo, default: YesOrNo.NO })
  tutor_write: string;

  @Column({ enum: YesOrNo, default: YesOrNo.NO })
  videos_read: string;

  @Column({ enum: YesOrNo, default: YesOrNo.NO })
  videos_write: string;

  @Column({ enum: YesOrNo, default: YesOrNo.NO })
  transactions_read: string;

  @Column({ enum: YesOrNo, default: YesOrNo.NO })
  transactions_write: string;

  @Column({ enum: YesOrNo, default: YesOrNo.NO })
  marketer_read: string;

  @Column({ enum: YesOrNo, default: YesOrNo.NO })
  marketer_write: string;

  @Column({ enum: YesOrNo, default: YesOrNo.NO })
  admin_delete_read: string;

  @Column({ enum: YesOrNo, default: YesOrNo.NO })
  admin_delete_write: string;
}
