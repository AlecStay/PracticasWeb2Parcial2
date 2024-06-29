import { PartialType, InputType } from '@nestjs/graphql';
import { CreateTorneoDto } from './create-torneo.dto';
import { IsString, IsOptional } from 'class-validator';
import { Field } from '@nestjs/graphql';

@InputType()
export class UpdateTorneoDto extends PartialType(CreateTorneoDto) {
  @IsString()
  @IsOptional()
  @Field(() => String, { nullable: true })
  Descripcion?: string;

  @IsString()
  @IsOptional()
  @Field(() => String, { nullable: true })
  Estado?: string;
}
