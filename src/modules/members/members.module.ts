import { PrismaModule } from './../prisma/prisma.module';
import { Module } from '@nestjs/common';
import { MembersService } from './members.service';
import { MembersController } from './members.controller';

@Module({
  controllers: [MembersController],
  providers: [MembersService],
  imports: [PrismaModule],
})
export class MembersModule {}
