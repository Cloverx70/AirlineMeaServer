import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Userlogin } from 'src/entities/entities/Userlogin';
import { Repository } from 'typeorm';
import { signupDto } from './dtos/signupDto';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { signindto } from './dtos/signinDto';
import { use } from 'passport';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(Userlogin)
    private readonly AuthRepo: Repository<Userlogin>,
    private readonly JwtService: JwtService,
  ) {}

  async validate(signin: signindto) {
    try {
      const user = await this.AuthRepo.findOne({
        where: { email: signin.email },
      });

      if (!user) return Response.json({ message: 'not found' });

      if (bcrypt.compareSync(signin.password, user.passwordHash)) {
        const payload = { email: user.email, userId: user.userId };
        const token = this.JwtService.sign(payload);
        return token;
      }
    } catch (error) {
      console.error(error);
    }
  }

  async signup(signupdto: signupDto): Promise<Userlogin> {
    try {
      const salt = await bcrypt.genSalt(10);

      const passwordHash = await bcrypt.hash(signupdto.password, salt);

      const user = this.AuthRepo.create({
        userId: Math.floor(Math.random() * 10000) + 1000,
        username: signupdto.fullname,
        email: signupdto.email,
        passwordHash: passwordHash,
      });
      await this.AuthRepo.save(user);

      return user;
    } catch (error) {
      console.error(error);
    }
  }
}
