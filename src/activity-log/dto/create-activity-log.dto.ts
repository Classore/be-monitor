import {
  IsBoolean,
  IsJSON,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUUID,
} from 'class-validator';

export class CreateActivityLogDto {
  @IsNotEmpty()
  @IsString()
  type: string;

  @IsNotEmpty()
  @IsUUID()
  user_id: string;

  @IsNotEmpty()
  @IsString()
  description: string;

  @IsBoolean()
  @IsNotEmpty()
  is_successful: boolean;

  @IsOptional()
  @IsJSON()
  meta?: any;
}

export interface EventLogDto extends Object {
  user_id?: string;
  login_time?: Date;
  success?: boolean;
  error?: string;
  module?: string;
  chapter?: string;
  subject?: string;
  progress?: number;
  current_time?: Date;
  chosen_bundle?: string;
}
