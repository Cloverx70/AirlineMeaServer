import { Controller, Post } from '@nestjs/common';
import { LocationService } from './location.service';

@Controller('location')
export class LocationController {
  constructor(private readonly LocationService: LocationService) {}

  @Post('get-all-locations')
  async getAllLocations() {
    return await this.LocationService.getAllLocations();
  }
}
