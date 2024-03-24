import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Flights } from 'src/entities/entities/Flights';
import { Userflights } from 'src/entities/entities/Userflights';
import { Userlogin } from 'src/entities/entities/Userlogin';
import { Repository } from 'typeorm';
import { AnalyticsDto } from './dtos/AnalyticsDto';
import { UserFlightDto } from './dtos/UserFlightDto';

@Injectable()
export class UserflightService {
  constructor(
    @InjectRepository(Userflights)
    private readonly userFlightsRepo: Repository<Userflights>,
    @InjectRepository(Userlogin)
    private readonly userRepo: Repository<Userlogin>,
    @InjectRepository(Flights)
    private readonly FlightRepo: Repository<Flights>,
  ) {}

  async getAllFlights(): Promise<Userflights[]> {
    try {
      return this.userFlightsRepo.find();
    } catch (error) {
      console.error(error);
    }
  }

  async getFlightById(id: number): Promise<Userflights> {
    try {
      return this.userFlightsRepo.findOne({ where: { userflightId: id } });
    } catch (error) {
      console.error(error);
    }
  }

  async getAnalytics(): Promise<AnalyticsDto> {
    try {
      const users = await this.userRepo.find();
      const userFlights = await this.userFlightsRepo.find();
      const analytics = new AnalyticsDto();
      analytics.TotalBookedTickets = 0;
      analytics.TotalSpendings = 0;

      if (Userflights != null) {
        userFlights.forEach((item) => {
          analytics.TotalSpendings += parseInt(item.bookedtickets);
          analytics.TotalBookedTickets += parseInt(item.tickets);
        });

        analytics.usernumber = users.length;
      }

      return analytics;
    } catch (error) {
      console.error(error);
    }
  }

  async removeUserFlightById(id: number): Promise<Userflights> {
    try {
      const UserFlight = await this.userFlightsRepo.findOne({
        where: { userflightId: id },
      });

      await this.userFlightsRepo.remove(UserFlight);
      return UserFlight;
    } catch (error) {
      console.error(error);
    }
  }

  async addUserFlight(UserFlightDto: UserFlightDto): Promise<Userflights> {
    try {
      const Flight = await this.FlightRepo.findOne({
        where: { flightId: UserFlightDto.FID },
      });
      const User = await this.userRepo.findOne({
        where: { userId: UserFlightDto.UID },
      });

      const UserFlight = new Userflights();

      (UserFlight.userflightId = Math.floor(Math.random() * 100000) + 1),
        (UserFlight.userId = User.userId),
        (UserFlight.flightId = Flight.flightId),
        (UserFlight.tickets = `${UserFlightDto.Tickets}`),
        (UserFlight.departingfrom = Flight.departureLocation),
        (UserFlight.arrivingat = Flight.arrivalLocation),
        (UserFlight.departingDate = Flight.departureDateTime),
        (UserFlight.flightType = Flight.flightType),
        (UserFlight.continent = Flight.continent),
        //@ts-ignore
        (UserFlight.bookedtickets = `${Flight.price * UserFlightDto.Tickets}`),
        (UserFlight.timestamp = new Date());

      const userFlight = this.userFlightsRepo.create(UserFlight);
      await this.userFlightsRepo.save(UserFlight);

      return userFlight;
    } catch (error) {
      console.error(error);
    }
  }
}
