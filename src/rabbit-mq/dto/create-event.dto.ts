import { IsEnum, IsObject } from 'class-validator';
import { EventType } from 'src/common/enums/index.enum';

export class CreateEventDto {
  @IsEnum(EventType)
  event_type: EventType;

  @IsObject()
  data: EventDataDto;
}

export interface EventDataDto extends Object {
  user_id?: string;
  login_time?: Date;
  success?: boolean;
  error?: string;
  module?: string;
  chapter?: string;
  subject?: string;
  progress?: number;
}
