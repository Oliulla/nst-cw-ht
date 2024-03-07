import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { now } from 'mongoose';
import { UserRole } from 'src/user/user.entity';

export type UserDocument = User & Document;

@Schema({ timestamps: true, collection: 'users' })
export class User {
  @Prop({ required: true })
  password: string;

  @Prop({
    enum: [UserRole.SELLER, UserRole.BUYER, UserRole.ADMIN],
    required: true,
  })
  role: string;

  @Prop({
    name: {
      firstName: { required: true },
      lastName: { required: true },
    },
  })
  name: { firstName: string; lastName: string };

  @Prop({ required: true, unique: true })
  phoneNumber: string;

  @Prop({ required: true })
  address: string;

  @Prop({ required: true })
  budget: number;

  @Prop({ required: true, default: 0 })
  income: number;

  @Prop({ default: now() })
  createdAt: Date;

  @Prop({ default: now() })
  updatedAt: Date;
}

export const UserSchema = SchemaFactory.createForClass(User);
