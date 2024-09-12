import { ApiProperty } from '@nestjs/swagger';
import {
  IsArray,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';
import validationMessages from 'src/constants/validation.messages';
// import { Member } from 'src/modules/members/entities/member.entity';

export class CreateProjectDto {
  @ApiProperty({ type: String, example: 'Portfolio groove' })
  @IsNotEmpty({ message: validationMessages.PROJECTS_TITLE_EMPTY })
  @IsString({ message: validationMessages.PROJECTS_TITLE_STRING })
  readonly title: string;

  @ApiProperty()
  @IsOptional()
  readonly poster?: string;

  @ApiProperty({ type: String, example: 'https://link.com' })
  @IsNotEmpty({ message: validationMessages.PROJECTS_LINK_EMPTY })
  @IsString({ message: validationMessages.PROJECTS_LINK_STRING })
  @IsOptional()
  readonly link?: string;

  @ApiProperty({ type: String, example: 'Some project description' })
  @IsNotEmpty({ message: validationMessages.PROJECTS_DESCRIPTION_EMPTY })
  @IsString({ message: validationMessages.PROJECTS_DESCRIPTION_STRING })
  @IsOptional()
  readonly description?: string;

  @ApiProperty({ type: [Number], example: [1, 2, 3] })
  @IsNotEmpty({ message: validationMessages.PROJECTS_MEMBER_IDS_EMPTY })
  @IsArray({ message: validationMessages.PROJECTS_MEMBER_IDS_ARRAY })
  @IsNumber(
    {},
    {
      message: validationMessages.PROJECTS_MEMBER_IDS_ARRAY_NUMBER,
      each: true,
    },
  )
  readonly memberIds?: number[];
}
