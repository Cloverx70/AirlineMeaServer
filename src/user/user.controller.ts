import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { updateUserDto } from './dtos/updateUserDto';
import { Userlogin } from 'src/entities/entities/Userlogin';
import { updateFullUserDto } from './dtos/updateFullUserDto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('update-user-by-id')
  async updateUserById(
    @Body() updateDto: updateUserDto,
  ): Promise<updateUserDto> {
    return await this.userService.updateUserById(updateDto);
  }

  @Post('update-full-user-by-id')
  async updateFullUserById(
    @Body() UpdateFullUserDto: updateFullUserDto,
  ): Promise<Userlogin> {
    return await this.userService.updateFullUserById(UpdateFullUserDto);
  }

  @Post('get-user-by-id/:id')
  async getUserById(id: number): Promise<Userlogin> {
    return await this.userService.getUserById(id);
  }
  @Post('is-admin/:id')
  async isAdmin(id: number): Promise<Boolean> {
    return await this.userService.isAdmin(id);
  }

  @Post('get-all-user')
  async getAllUsers(): Promise<Userlogin[]> {
    return await this.userService.getAllUsers();
  }
  @Post('remove-user-by-id/:id')
  async removeUserById(id: number): Promise<Userlogin> {
    return await this.userService.removeUserById(id);
  }
}
