import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Flights } from 'src/entities/entities/Flights';
import { Location } from 'src/entities/entities/Location';
import { Type } from 'src/entities/entities/Type';
import { Repository } from 'typeorm';

@Injectable()
export class FlightService {
  constructor(
    @InjectRepository(Flights) private readonly FlightRepo: Repository<Flights>,
    @InjectRepository(Location)
    private readonly LocationRepo: Repository<Location>,
    @InjectRepository(Type) private readonly TypesRepo: Repository<Type>,
  ) {}

  async getAllFlights(): Promise<Flights[]> {
    try {
      return this.FlightRepo.find();
    } catch (error) {
      console.error(error);
    }
  }

  async getFlightById(id: number): Promise<Flights> {
    try {
      return this.FlightRepo.findOne({ where: { flightId: id } });
    } catch (error) {
      console.error(error);
    }
  }

  async removeFlightById(id: number): Promise<Flights[]> {
    try {
      const user = await this.FlightRepo.findOne({ where: { flightId: id } });

      await this.FlightRepo.remove(user);

      return await this.FlightRepo.find();
    } catch (error) {
      console.error(error);
    }
  }

  async createRandomFlight(): Promise<Flights> {
    try {
      const randomlocationid = Math.floor(Math.random() * 48) + 1;
      const randomFlightTypeid = Math.floor(Math.random() * 4) + 1;
      const randomFlightRoundTrip = Math.floor(Math.random() * 1);

      const id = Math.floor(Math.random() * 10000) + 1000;
      const departingfrom = 'Beirut';
      const arrivingat = await this.LocationRepo.findOne({
        where: { locationId: randomlocationid },
      });
      const flightType = await this.TypesRepo.findOne({
        where: { typeId: randomFlightTypeid },
      });
      const currentYear = new Date().getFullYear();
      const randomYear = currentYear; // Generate a random year within the next 5 years
      const randomMonth = Math.floor(Math.random() * 12) + 1;
      const randomDay = Math.floor(Math.random() * 28) + 1; // Assuming maximum 28 days per month for simplicity
      const randomHour = Math.floor(Math.random() * 24);
      const randomMinute = Math.floor(Math.random() * 60);
      const randomSecond = Math.floor(Math.random() * 60);

      const randomPrice = Math.floor(Math.random() * 999) + 300;

      const departingDate = new Date(
        randomYear,
        randomMonth - 1,
        randomDay,
        randomHour,
        randomMinute,
        randomSecond,
      );

      const roundTrip = ['One way', 'Multicity'];
      //@ts-ignore
      const newFlight = this.FlightRepo.create({
        //@ts-ignore
        flightId: id,
        departureLocation: departingfrom,
        arrivalLocation: arrivingat.locationName,
        departureDateTime: departingDate,
        flightType: flightType.typeName,
        price: randomPrice,
        roundTrip: roundTrip[randomFlightRoundTrip],
        imgsrc: arrivingat.imgsrc,
        continent: arrivingat.continent,
      });

      await this.FlightRepo.save(newFlight);

      return newFlight;
    } catch (error) {
      console.error(error);
    }
  }
}
