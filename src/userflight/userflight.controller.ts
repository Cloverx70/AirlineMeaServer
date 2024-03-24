import { Body, Controller, Post } from '@nestjs/common';
import { Userflights } from 'src/entities/entities/Userflights';
import { UserFlightDto } from './dtos/UserFlightDto';
import { UserflightService } from './userflight.service';
import { AnalyticsDto } from './dtos/AnalyticsDto';

@Controller('userflight')
export class UserflightController {
  constructor(private readonly UserFlightService: UserflightService) {}

  @Post('add-user-flight')
  async addUserFlight(
    @Body() UserFlightDto: UserFlightDto,
  ): Promise<Userflights> {
    return await this.UserFlightService.addUserFlight(UserFlightDto);
  }

  @Post('delete-user-flight-by-id/:id')
  async removeUserFlightById(id: number): Promise<Userflights> {
    return await this.UserFlightService.removeUserFlightById(id);
  }
  @Post('get-analytics')
  async getAnalytics(): Promise<AnalyticsDto> {
    return await this.UserFlightService.getAnalytics();
  }

  @Post('get-flight-by-id/:id')
  async getFlightById(id: number): Promise<Userflights> {
    return await this.UserFlightService.getFlightById(id);
  }

  @Post('get-all-flights')
  async getAllFlights(): Promise<Userflights[]> {
    return await this.UserFlightService.getAllFlights();
  }
}
