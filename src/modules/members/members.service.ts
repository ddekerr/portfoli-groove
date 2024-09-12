import { Injectable } from '@nestjs/common';

import { CreateMemberDto } from './dto/create-member.dto';
import { UpdateMemberDto } from './dto/update-member.dto';

import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class MembersService {
  constructor(private prisma: PrismaService) {}

  // #################### CREATE SERVICE ####################
  async create(dto: CreateMemberDto) {
    const newMmeber = await this.prisma.member.create({ data: dto });
    return newMmeber;
  }

  // #################### UPDATE SERVICE ####################
  async update(id: number, dto: UpdateMemberDto) {
    const updatedMember = await this.prisma.member.update({
      where: { id },
      data: dto,
    });
    return updatedMember;
  }

  // #################### REMOVE SERVICE ####################
  async remove(id: number) {
    const deletedMember = await this.prisma.member.delete({ where: { id } });
    return deletedMember;
  }

  // #################### FIND ALL SERVICE ####################
  async findAll() {
    const members = await this.prisma.member.findMany();
    return members;
  }

  // #################### FIND ONE SERVICE ####################
  async findOne(id: number) {
    const member = await this.prisma.member.findUnique({ where: { id } });
    return member;
  }
}
