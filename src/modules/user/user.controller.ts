import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/CreateUser.dto';
import { User } from 'src/schemas/User.schema';

@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @Post()
  async createUser(@Body() createUserDto: CreateUserDto): Promise<User> {
    const createdUser = await this.userService.createUser(createUserDto);
    return createdUser;
  }

  @Get()
  async findUsers(): Promise<User[]> {
    return await this.userService.findUsers();
  }

  @Get(':id')
  async findSingleUser(@Param('id') id: string): Promise<User> {
    return await this.userService.findSingleUser(id);
  }
}
