import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Partido } from '../../partido/entities/partido.entity';
import { Field, ID, ObjectType} from '@nestjs/graphql';

@ObjectType()
@Entity({ name: 'equipo' })
export class Equipo {
  @PrimaryGeneratedColumn()
  @Field(() => ID)
  idequipo: number;

  @Column()
  @Field(() => String)
  Descripcion: string;

  @Column()
  @Field(() => String)
  Serie: string;

  @Column({ default: 'Activo' })
  @Field(() => String)
  Estado: string;

  @OneToMany(() => Partido, partido => partido.equipo1)
  partidos: Partido[];
}