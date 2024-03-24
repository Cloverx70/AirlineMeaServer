import { Column, Entity } from 'typeorm';

@Entity('flights', { schema: 'airlinelebanon' })
export class Flights {
  @Column('int', { primary: true, name: 'flight_id' })
  flightId: number;

  @Column('varchar', { name: 'departure_location', nullable: true, length: 70 })
  departureLocation: string | null;

  @Column('varchar', { name: 'arrival_location', nullable: true, length: 70 })
  arrivalLocation: string | null;

  @Column('datetime', { name: 'departure_date_time' })
  departureDateTime: Date;

  @Column('varchar', { name: 'flight_type', nullable: true, length: 70 })
  flightType: string | null;

  @Column('decimal', { name: 'price', precision: 18, scale: 0 })
  price: string;

  @Column('varchar', { name: 'roundTrip', length: 50 })
  roundTrip: string;

  @Column('varchar', { name: 'imgsrc', nullable: true, length: 400 })
  imgsrc: string | null;

  @Column('varchar', { name: 'continent', nullable: true, length: 40 })
  continent: string | null;
}
