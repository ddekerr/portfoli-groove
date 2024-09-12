import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { MembersService } from './members.service';
import { CreateMemberDto } from './dto/create-member.dto';
import { UpdateMemberDto } from './dto/update-member.dto';
import { ApiTags } from '@nestjs/swagger';
import {
  ApiCreateMember,
  ApiDeleteMember,
  ApiFindAllMembers,
  ApiFindOneMember,
  ApiUpdateMember,
} from './helpers/members.documentation';

@Controller('members')
@ApiTags('Members')
export class MembersController {
  constructor(private readonly membersService: MembersService) {}

  // #################### CREATE CONTROLLER ####################
  @Post()
  @ApiCreateMember()
  create(@Body() dto: CreateMemberDto) {
    return this.membersService.create(dto);
  }

  // #################### UPDATE CONTROLLER ####################
  @Patch(':id')
  @ApiUpdateMember()
  update(@Param('id') id: string, @Body() dto: UpdateMemberDto) {
    return this.membersService.update(+id, dto);
  }

  // #################### REMOVE CONTROLLER ####################
  @Delete(':id')
  @ApiDeleteMember()
  remove(@Param('id') id: string) {
    return this.membersService.remove(+id);
  }

  // #################### FIND ALL CONTROLLER ####################
  @Get()
  @ApiFindAllMembers()
  findAll() {
    return this.membersService.findAll();
  }

  // #################### FIND ONE CONTROLLER ####################
  @Get(':id')
  @ApiFindOneMember()
  findOne(@Param('id') id: string) {
    return this.membersService.findOne(+id);
  }
}
