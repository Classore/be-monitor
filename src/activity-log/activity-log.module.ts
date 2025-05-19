import { Module } from '@nestjs/common';
import { ActivityLogService } from './activity-log.service';
import { ActivityLogController } from './activity-log.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ActivityLog, Admin, User } from 'src/entities';

@Module({
  imports: [TypeOrmModule.forFeature([User, ActivityLog, Admin])],
  controllers: [ActivityLogController],
  providers: [ActivityLogService],
  exports: [ActivityLogService],
})
export class ActivityLogModule {}
