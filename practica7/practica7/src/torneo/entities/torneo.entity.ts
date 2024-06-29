import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Partido } from '../../partido/entities/partido.entity';
import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
@Entity({ name: 'torneo' })
export class Torneo {
  @PrimaryGeneratedColumn()
  @Field(() => ID)
  idtorneo: number;

  @Column()
  @Field(() => String)
  Descripcion: string;

  @Column({ default: 'Activo' })
  @Field(() => String)
  Estado: string;

  @OneToMany(() => Partido, partido => partido.torneo)
  partidos: Partido[];
}
