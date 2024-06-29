import { Field, ID, InputType } from '@nestjs/graphql';
import { IsInt, IsNotEmpty } from 'class-validator';

@InputType()
export class CreatePartidoDto {
  @IsInt()
  @IsNotEmpty()
  @Field(() => ID)
  idtorneo: number;

  @IsInt()
  @IsNotEmpty()
  @Field(() => ID)
  equipo1Id: number;

  @IsInt()
  @IsNotEmpty()
  @Field(() => ID)
  equipo2Id: number;

  @IsInt()
  @IsNotEmpty()
  @Field(() => String)
  golesEquipo1: number;

  @IsInt()
  @IsNotEmpty()
  @Field(() => String)
  golesEquipo2: number;

  @IsNotEmpty()
  @Field(() => String)
  observacion: string;

  @IsNotEmpty()
  @Field(() => String)
  Estado: string;
}
