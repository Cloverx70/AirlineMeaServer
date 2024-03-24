import { Module } from '@nestjs/common';
import { FlightController } from './flight.controller';
import { FlightService } from './flight.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Flights } from 'src/entities/entities/Flights';
import { Location } from 'src/entities/entities/Location';
import { Type } from 'src/entities/entities/Type';

@Module({
  imports: [TypeOrmModule.forFeature([Flights, Location, Type])],
  controllers: [FlightController],
  providers: [FlightService],
})
export class FlightModule {}
