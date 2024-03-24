import { IsInt, IsString } from 'class-validator';
import internal from 'stream';

export class ReviewDto {
  @IsString()
  Username: string;
  @IsInt()
  Userid: number;
  @IsString()
  UserMessage: string;
  @IsInt()
  Stars: number;
}
