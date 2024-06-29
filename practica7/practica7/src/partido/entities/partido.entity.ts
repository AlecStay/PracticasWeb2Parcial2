import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Equipo } from '../../equipo/entities/equipo.entity';
import { Torneo } from '../../torneo/entities/torneo.entity';
import { JoinColumn } from 'typeorm';
import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
@Entity({ name: 'partido' })
export class Partido {
  @PrimaryGeneratedColumn()
  @Field(() => ID)
  idpartido: number;

  @ManyToOne(() => Torneo, torneo => torneo.partidos, { nullable: false })
  @JoinColumn({ name: "idtorneo" }) // Asegúrate de importar JoinColumn de 'typeorm'
  torneo: Torneo;

  @ManyToOne(() => Equipo, equipo => equipo.partidos, { nullable: false })
  equipo1: Equipo;

  @Column()
  @Field(() => ID)
  equipo1Id: number;

  @Column()
  @Field(() => ID)
  equipo2Id: number;

  @Column()
  @Field(() => String)
  golesEquipo1: number;

  @Column()
  @Field(() => String)
  golesEquipo2: number;

  @Column()
  @Field(() => String)
  observacion: string;

  @Column({ default: 'Activo' })
  @Field(() => String)
  Estado: string;
}