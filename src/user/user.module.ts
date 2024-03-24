import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Userlogin } from 'src/entities/entities/Userlogin';

@Module({
  imports: [TypeOrmModule.forFeature([Userlogin])],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
