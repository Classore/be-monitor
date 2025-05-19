import { IsEnum, IsObject } from 'class-validator';
import { EventType } from 'src/common/enums/index.enum';

export class CreateEventDto {
  @IsEnum(EventType)
  event_type: EventType;

  @IsObject()
  data: any;
}
