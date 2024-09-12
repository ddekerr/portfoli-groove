import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ProjectsService } from './projects.service';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { ApiTags } from '@nestjs/swagger';
import {
  ApiCreateProject,
  ApiDeleteProject,
  ApiFindAllProjects,
  ApiFindOneProject,
  ApiUpdateProject,
} from './helpers/projects.documentation';

@Controller('projects')
@ApiTags('Projects')
export class ProjectsController {
  constructor(private readonly projectsService: ProjectsService) {}

  // #################### CREATE CONTROLLER ####################
  @Post()
  @ApiCreateProject()
  create(@Body() createProjectDto: CreateProjectDto) {
    return this.projectsService.create(createProjectDto);
  }

  // #################### UPDATE CONTROLLER ####################
  @Patch(':id')
  @ApiUpdateProject()
  update(@Param('id') id: string, @Body() updateProjectDto: UpdateProjectDto) {
    return this.projectsService.update(+id, updateProjectDto);
  }

  // #################### REMOVE CONTROLLER ####################
  @Delete(':id')
  @ApiDeleteProject()
  remove(@Param('id') id: string) {
    return this.projectsService.remove(+id);
  }

  // #################### FIND ALL CONTROLLER ####################
  @Get()
  @ApiFindAllProjects()
  findAll() {
    return this.projectsService.findAll();
  }

  // #################### FIND ONE CONTROLLER ####################
  @Get(':id')
  @ApiFindOneProject()
  findOne(@Param('id') id: string) {
    return this.projectsService.findOne(+id);
  }
}
