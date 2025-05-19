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
