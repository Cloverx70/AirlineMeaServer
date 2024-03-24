import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { UserModule } from './user/user.module';

import { FlightModule } from './flight/flight.module';
import { UserflightModule } from './userflight/userflight.module';
import { LocationModule } from './location/location.module';
import { ReviewModule } from './review/review.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    DatabaseModule,
    UserModule,
    FlightModule,
    UserflightModule,
    LocationModule,
    ReviewModule,
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
