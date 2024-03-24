import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Userlogin } from 'src/entities/entities/Userlogin';
import { PassportModule } from '@nestjs/passport';
import { localStrategy } from './strategies/local.strategy';

@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      secret: 'at-strategy',
      signOptions: { expiresIn: '1d' },
    }),
    TypeOrmModule.forFeature([Userlogin]),
  ],
  providers: [AuthService, localStrategy],
  controllers: [AuthController],
})
export class AuthModule {}
