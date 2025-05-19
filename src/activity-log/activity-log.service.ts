import { Injectable } from '@nestjs/common';
import { CreateActivityLogDto } from './dto/create-activity-log.dto';
import { UpdateActivityLogDto } from './dto/update-activity-log.dto';
import { Repository } from 'typeorm';
import { ActivityLog, User } from 'src/entities';
import { InjectRepository } from '@nestjs/typeorm';
import { EventType } from 'src/common/enums/index.enum';

@Injectable()
export class ActivityLogService {
  constructor(
    @InjectRepository(ActivityLog)
    private readonly activityLogRepo: Repository<ActivityLog>,
    @InjectRepository(User)
    private readonly userLogRepo: Repository<User>,
  ) {}

  async userLogin(data: any) {
    try {
      const createData: CreateActivityLogDto = {
        type: EventType.USER_LOGIN,
        user_id: data?.user_id,
        description: `User logged in to the platform`,
        is_successful: data?.success,
        meta: {
          login_time: data?.login_time,
          ...(data?.error && { error_message: data?.error }),
        },
      };
      const createdLog = this.activityLogRepo.create(createData);
      await this.activityLogRepo.save(createdLog);
      return;
    } catch (error) {
      console.log('🚀 ~ ActivityLogService ~ userLogin ~ error:', error);
    }
  }

  findAll() {
    return `This action returns all activityLog`;
  }

  findOne(id: number) {
    return `This action returns a #${id} activityLog`;
  }

  update(id: number, updateActivityLogDto: UpdateActivityLogDto) {
    return `This action updates a #${id} activityLog`;
  }

  remove(id: number) {
    return `This action removes a #${id} activityLog`;
  }
}
