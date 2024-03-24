import { Controller, Param, Post } from '@nestjs/common';
import { FlightService } from './flight.service';
import { Flights } from 'src/entities/entities/Flights';

@Controller('flight')
export class FlightController {
  constructor(private readonly FlightService: FlightService) {}

  @Post('get-all-flights')
  async getAllFlights(): Promise<Flights[]> {
    return await this.FlightService.getAllFlights();
  }
  @Post('get-flight-by-id/:id')
  async getFlightById(id: number): Promise<Flights> {
    return await this.FlightService.getFlightById(id);
  }
  @Post('remove-flight-by-id/:id')
  async removeFlightById(id: number): Promise<Flights[]> {
    return await this.FlightService.removeFlightById(id);
  }
  @Post('create-random-flight')
  async createRandomFlight(): Promise<Flights> {
    return await this.FlightService.createRandomFlight();
  }
}
