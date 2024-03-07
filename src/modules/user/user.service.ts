import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/schemas/User.schema';
import { CreateUserDto } from './dto/CreateUser.dto';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async createUser(createUserDto: CreateUserDto): Promise<User> {
    const newUser = await this.userModel.create(createUserDto);
    return newUser;
  }

  async findUsers(): Promise<User[]> {
    return await this.userModel.find();
  }

  async findSingleUser(id: string): Promise<User> {
    return await this.userModel.findById(id);
  }
}
