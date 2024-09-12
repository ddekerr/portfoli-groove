import { ApiProperty } from '@nestjs/swagger';
import {
  IsArray,
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';
import validationMessages from 'src/constants/validation.messages';

export class CreateMemberDto {
  @ApiProperty({ type: String, example: 'Dima' })
  @IsNotEmpty({ message: validationMessages.MEMBERS_FIRSTNAME_EMPTY })
  @IsString({ message: validationMessages.MEMBERS_FIRSTNAME_STRING })
  readonly firstName: string;

  @ApiProperty({ type: String, example: 'Bondarenko' })
  @IsNotEmpty({ message: validationMessages.MEMBERS_LASTNAME_EMPTY })
  @IsString({ message: validationMessages.MEMBERS_LASTNAME_STRING })
  readonly lastName: string;

  @ApiProperty({ type: String, example: 'example@gmail.com' })
  @IsNotEmpty({ message: validationMessages.MEMBERS_EMAIL_EMPTY })
  @IsEmail({}, { message: validationMessages.MEMBERS_EMAIL })
  readonly email: string;

  @ApiProperty({ type: String, example: 'Back-end' })
  @IsNotEmpty({ message: validationMessages.MEMBERS_ROLE_EMPTY })
  @IsString({ message: validationMessages.MEMBERS_ROLE_STRING })
  readonly role: string;

  @ApiProperty({ type: [Number], example: [1, 2, 3] })
  @IsNotEmpty({ message: validationMessages.MEMBERS_PROJECT_IDS_EMPTY })
  @IsArray({ message: validationMessages.MEMBERS_PROJECT_IDS_ARRAY })
  @IsNumber(
    {},
    {
      message: validationMessages.MEMBERS_PROJECT_IDS_ARRAY_NUMBER,
      each: true,
    },
  )
  @IsOptional()
  readonly projectIds?: number[];

  @ApiProperty()
  @IsOptional()
  readonly avatar?: string;
}
