import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Userlogin } from 'src/entities/entities/Userlogin';
import { Repository } from 'typeorm';
import { updateUserDto } from './dtos/updateUserDto';
import { updateFullUserDto } from './dtos/updateFullUserDto';
import { error } from 'console';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(Userlogin)
    private readonly UserRepo: Repository<Userlogin>,
  ) {}

  async updateUserById(updateDto: updateUserDto): Promise<updateUserDto> {
    try {
      const user = await this.UserRepo.findOne({
        where: { userId: updateDto.userId },
      });

      user.totalSpendings += updateDto.FlightPrice;
      user.flightsCanceled += updateDto.FlightsCanceledNumber;
      user.flightsBooked += updateDto.FlightsBookNumber;
      user.flightsDone += updateDto.FlightsDoneNumber;
      user.moneyavailable += updateDto.wallet;

      await this.UserRepo.save(user);

      return updateDto;
    } catch (error) {
      console.error(error);
    }
  }

  async getUserById(id: number): Promise<Userlogin> {
    try {
      const user = await this.UserRepo.findOne({ where: { userId: id } });
      return user;
    } catch (error) {
      console.error(error);
    }
  }

  async updateFullUserById(
    UpdateFullUserDto: updateFullUserDto,
  ): Promise<Userlogin> {
    try {
      const user = await this.UserRepo.findOne({
        where: { userId: UpdateFullUserDto.userId },
      });

      user.username = UpdateFullUserDto.username;
      user.email = UpdateFullUserDto.email;
      user.passwordHash = user.passwordHash;

      await this.UserRepo.save(user);
      return user;
    } catch (error) {
      console.error(error);
    }
  }

  async isAdmin(id: number): Promise<Boolean> {
    try {
      const user = await this.UserRepo.findOne({ where: { userId: id } });

      if (!user) throw error('not found');
      else return user.isAdmin;
    } catch (error) {
      console.error(error);
    }
  }

  async getAllUsers(): Promise<Userlogin[]> {
    try {
      return await this.UserRepo.find();
    } catch (error) {
      console.error(error);
    }
  }

  async removeUserById(id: number): Promise<Userlogin> {
    try {
      const user = await this.UserRepo.findOne({ where: { userId: id } });

      await this.UserRepo.remove(user);

      return user;
    } catch (error) {
      console.error(error);
    }
  }
}
