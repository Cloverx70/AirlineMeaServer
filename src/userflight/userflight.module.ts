import { Module } from '@nestjs/common';
import { UserflightController } from './userflight.controller';
import { UserflightService } from './userflight.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Userflights } from 'src/entities/entities/Userflights';
import { Userlogin } from 'src/entities/entities/Userlogin';
import { Flights } from 'src/entities/entities/Flights';

@Module({
  imports: [TypeOrmModule.forFeature([Userflights, Userlogin, Flights])],
  controllers: [UserflightController],
  providers: [UserflightService],
})
export class UserflightModule {}
