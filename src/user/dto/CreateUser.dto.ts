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

export class NameDto {
  @IsNotEmpty()
  @IsString()
  @Length(4, 12, {
    message: 'Password length Must be between 4 and 12 charcters',
  })
  fristName: string;

  @IsNotEmpty()
  @IsString()
  @Length(4, 12, {
    message: 'Password length Must be between 4 and 12 charcters',
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
  password: string;

  @IsNotEmpty()
  @IsString()
  @IsEnum(UserRole)
  role: UserRole;

  @ValidateNested({ each: true })
  @Type(() => NameDto)
  name: NameDto;

  @IsNotEmpty()
  @IsString()
  @Matches(/^[6789]\d{14}$/)
  phoneNumber: string;

  @IsNotEmpty()
  @IsString()
  address: string;

  @IsNotEmpty()
  @IsInt()
  budget: number;

  @IsNotEmpty()
  @IsInt()
  income: number;
}
