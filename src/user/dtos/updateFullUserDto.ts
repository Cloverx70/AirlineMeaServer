import { IsEmail } from 'class-validator';

export class updateFullUserDto {
  userId: number;
  @IsEmail()
  email: string;
  username: string;
}
