import { ApiProperty } from '@nestjs/swagger';
import { Project } from '@prisma/client';

export class ProjectEntity implements Project {
  @ApiProperty({ type: Number, example: 1 })
  id: number;

  @ApiProperty({ type: String, example: 'Portfolio groove' })
  title: string;

  @ApiProperty({
    type: String,
    required: false,
    nullable: true,
    example: 'Description of the project',
  })
  description: string | null;

  @ApiProperty({
    type: String,
    required: false,
    nullable: true,
    example: 'https://path-to-server-with-image.jpeg',
  })
  poster: string | null;

  @ApiProperty({
    type: String,
    required: false,
    nullable: true,
    example: 'https://path-to-project-server',
  })
  link: string | null;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;
}
