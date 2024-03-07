import {
  IsEnum,
  IsInt,
  IsNotEmpty,
  IsString,
  Length,
  Matches,
  ValidateNested,
} from 'class-validator';
import { UserRole } from '../user.entity';
import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class NameDto {
  @IsNotEmpty()
  @IsString()
  @Length(3, 12, {
    message: 'Name length Must be between 3 and 12 charcters',
  })
  firstName: string;

  @IsNotEmpty()
  @IsString()
  @Length(3, 12, {
    message: 'Name length Must be between 3 and 12 charcters',
  })
  lastName: string;
}

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  @Length(6, 50, {
    message: 'Password length Must be between 6 and 50 charcters',
  })
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: 'password too weak',
  })
  @ApiProperty({ example: 'adfhKK.34jlajd@#%##ldkaKKK900' })
  password: string;

  @IsNotEmpty()
  @IsString()
  @IsEnum(UserRole)
  @ApiProperty({ example: 'BUYER' })
  role: UserRole;

  @ValidateNested({ each: true })
  @Type(() => NameDto)
  @ApiProperty({
    example: {
      firstName: 'Buyer',
      lastName: 'one',
    },
  })
  name: NameDto;

  @IsNotEmpty()
  @IsString()
  @Matches(/^[6789]\d{14}$/)
  @ApiProperty({ example: '01643616707' })
  phoneNumber: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({ example: 'Road 10, Sector 3, Uttara Dhaka.' })
  address: string;

  @IsNotEmpty()
  @IsInt()
  @ApiProperty({ example: 80000 })
  budget: number;

  @IsNotEmpty()
  @IsInt()
  @ApiProperty({ example: 0 })
  income: number;
}
