import { ApiProperty } from '@nestjs/swagger';
import { Member } from '@prisma/client';

export class MemberEntity implements Member {
  @ApiProperty({ type: Number, example: 1 })
  id: number;

  @ApiProperty({
    type: String,
    required: false,
    nullable: true,
    example: 'Dima',
  })
  firstName: string | null;

  @ApiProperty({
    type: String,
    required: false,
    nullable: true,
    example: 'Bondarenko',
  })
  lastName: string | null;

  @ApiProperty({
    type: String,
    required: false,
    nullable: true,
    example: 'https://path-to-server-with-image.jpeg',
  })
  avatar: string | null;

  @ApiProperty({ type: String, example: 'Back-end' })
  role: string;

  @ApiProperty({ type: String, example: 'example@gmail.com' })
  email: string;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;
}
