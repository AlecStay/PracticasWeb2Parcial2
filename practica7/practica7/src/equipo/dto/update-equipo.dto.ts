import { PartialType, InputType } from '@nestjs/graphql';
import { CreateEquipoDto } from './create-equipo.dto';

@InputType()
export class UpdateEquipoDto extends PartialType(CreateEquipoDto) {}
