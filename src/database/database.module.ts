import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Flights } from 'src/entities/entities/Flights';
import { Location } from 'src/entities/entities/Location';
import { Reviews } from 'src/entities/entities/Reviews';
import { Userlogin } from 'src/entities/entities/Userlogin';
import { FlightService } from 'src/flight/flight.service';
import { UserModule } from 'src/user/user.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'Kimokamaru@121',
      database: 'airlinelebanon',
      autoLoadEntities: true,
      synchronize: true,
    }),
  ],
})
export class DatabaseModule {}
