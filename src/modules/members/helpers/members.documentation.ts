import { applyDecorators } from '@nestjs/common';
import { ApiCreatedResponse, ApiOkResponse } from '@nestjs/swagger';
import { MemberEntity } from '../entities/member.entity';

export const ApiCreateMember = () => {
  return applyDecorators(ApiCreatedResponse({ type: MemberEntity }));
};

export const ApiUpdateMember = () => {
  return applyDecorators(ApiOkResponse({ type: MemberEntity }));
};

export const ApiDeleteMember = () => {
  return applyDecorators(ApiOkResponse({ type: MemberEntity }));
};

export const ApiFindAllMembers = () => {
  return applyDecorators(ApiOkResponse({ type: MemberEntity, isArray: true }));
};

export const ApiFindOneMember = () => {
  return applyDecorators(ApiOkResponse({ type: MemberEntity }));
};
