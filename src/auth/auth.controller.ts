import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { signupDto } from './dtos/signupDto';
import { signindto } from './dtos/signinDto';
import { AuthGuard } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { localguard } from './guards/local.guards';

@Controller('auth')
export class AuthController {
  constructor(private readonly authservice: AuthService) {}

  @Post('signup')
  async signup(@Body() signupdto: signupDto) {
    return await this.authservice.signup(signupdto);
  }

  @Post('signin')
  @UseGuards(localguard)
  async signin(@Body() signinpayload: signindto) {
    return await this.authservice.validate(signinpayload);
  }
}
