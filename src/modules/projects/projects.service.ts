import { Injectable } from '@nestjs/common';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ProjectsService {
  constructor(private prisma: PrismaService) {}

  // #################### CREATE SERVICE ####################
  async create(dto: CreateProjectDto) {
    const newProject = await this.prisma.project.create({ data: dto });
    return newProject;
  }

  // #################### UPDATE SERVICE ####################
  async update(id: number, dto: UpdateProjectDto) {
    const updatedProject = await this.prisma.project.update({
      where: { id },
      data: dto,
    });
    return updatedProject;
  }

  // #################### REMOVE SERVICE ####################
  async remove(id: number) {
    const deletedProject = await this.prisma.project.delete({ where: { id } });
    return deletedProject;
  }

  // #################### FIND ALL SERVICE ####################
  async findAll() {
    const pojects = await this.prisma.project.findMany();
    return pojects;
  }

  // #################### FIND ONE SERVICE ####################
  async findOne(id: number) {
    const project = await this.prisma.project.findUnique({ where: { id } });
    return project;
  }
}
