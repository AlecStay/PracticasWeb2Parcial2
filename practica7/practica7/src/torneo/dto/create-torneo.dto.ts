import { Field, InputType } from '@nestjs/graphql';
import { IsString, IsOptional } from 'class-validator';

@InputType()
export class CreateTorneoDto {
  @IsString()
  @Field(() => String)
  Descripcion: string;

  @IsString()
  @IsOptional()
  @Field(() => String, { nullable: true })
  Estado?: string;
}
