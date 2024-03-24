import { IsEmail } from 'class-validator';

export class signindto {
  @IsEmail()
  email: string;
  password: string;
}
