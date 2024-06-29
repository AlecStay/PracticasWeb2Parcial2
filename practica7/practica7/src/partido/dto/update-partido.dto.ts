import { InputType, Field, ID } from '@nestjs/graphql';

@InputType()
export class UpdatePartidoDto {
  @Field(() => ID, { nullable: true })
  equipo1Id?: number;

  @Field(() => ID, { nullable: true })
  equipo2Id?: number;

  @Field(() => String, { nullable: true })
  golesEquipo1?: number;

  @Field(() => String, { nullable: true })
  golesEquipo2?: number;

  @Field(() => String, { nullable: true })
  observacion?: string;

  @Field(() => String, { nullable: true })
  Estado?: string;
}
