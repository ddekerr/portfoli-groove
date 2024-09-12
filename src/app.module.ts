import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MembersModule } from './modules/members/members.module';
import { ProjectsModule } from './modules/projects/projects.module';
import { PrismaModule } from './modules/prisma/prisma.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MembersModule,
    ProjectsModule,
    PrismaModule,
  ],
})
export class AppModule {}
