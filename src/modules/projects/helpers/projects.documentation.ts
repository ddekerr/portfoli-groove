import { applyDecorators } from '@nestjs/common';
import { ApiCreatedResponse, ApiOkResponse } from '@nestjs/swagger';
import { ProjectEntity } from '../entities/project.entity';

export const ApiCreateProject = () => {
  return applyDecorators(ApiCreatedResponse({ type: ProjectEntity }));
};

export const ApiUpdateProject = () => {
  return applyDecorators(ApiOkResponse({ type: ProjectEntity }));
};

export const ApiDeleteProject = () => {
  return applyDecorators(ApiOkResponse({ type: ProjectEntity }));
};

export const ApiFindAllProjects = () => {
  return applyDecorators(ApiOkResponse({ type: ProjectEntity, isArray: true }));
};

export const ApiFindOneProject = () => {
  return applyDecorators(ApiOkResponse({ type: ProjectEntity }));
};
