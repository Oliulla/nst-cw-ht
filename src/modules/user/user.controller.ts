import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/CreateUser.dto';
import { User } from 'src/schemas/User.schema';

@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @Post()
  async createUser(@Body() createUserDto: CreateUserDto): Promise<User> {
    console.log(createUserDto);
    const createdUser = await this.userService.createUser(createUserDto);
    return createdUser;
  }
}
