// src/equipo/dto/create-equipo.dto.ts
import { Field,InputType } from '@nestjs/graphql';
import { IsString, IsOptional } from 'class-validator';

@InputType()
export class CreateEquipoDto {
  @IsString()
  @Field(() => String)
  Descripcion: string;

  @Field(() => String)
  @IsString()
  Serie: string;

  @IsString()
  @IsOptional()
  @Field(() => String, { nullable: true })
  Estado?: string;
}
