import { Router, Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const router = Router();

router.put('/:nombreEntidad/:idEntidad', async (req: Request, res: Response) => {
  const { nombreEntidad, idEntidad } = req.params;
  const { Descripcion, Serie, Estado, entornoId } = req.body;

  try {
    let updatedEntity;
    switch (nombreEntidad) {
      case 'equipos':
        const equipoData: any = {};
        if (Descripcion) equipoData.Descripcion = Descripcion;
        if (Serie) equipoData.Serie = Serie;
        if (Estado) equipoData.Estado = Estado;
        if (entornoId !== undefined) equipoData.entornoId = parseInt(entornoId, 10);

        updatedEntity = await prisma.equipo.update({
          where: { idequipo: parseInt(idEntidad, 10) },
          data: equipoData,
        });
        break;
      case 'torneos':
        const torneoData: any = {};
        if (Descripcion) torneoData.Descripcion = Descripcion;
        if (entornoId !== undefined) torneoData.entornoId = parseInt(entornoId, 10);

        updatedEntity = await prisma.torneo.update({
          where: { idtorneo: parseInt(idEntidad, 10) },
          data: torneoData,
        });
        break;
      case 'partidos':
        const partidoData: any = {};
        if (entornoId !== undefined) partidoData.entornoId = parseInt(entornoId, 10);

        updatedEntity = await prisma.partido.update({
          where: { idpartido: parseInt(idEntidad, 10) },
          data: partidoData,
        });
        break;
      case 'entornos':
        const entornoData: any = {};
        if (Descripcion) entornoData.Descripcion = Descripcion;

        updatedEntity = await prisma.entorno.update({
          where: { identorno: parseInt(idEntidad, 10) },
          data: entornoData,
        });
        break;
      default:
        throw new Error('Nombre de entidad no válido');
    }
    res.json(updatedEntity);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: 'Internal Server Error', details: error.message });
    } else {
      res.status(500).json({ error: 'Internal Server Error', details: 'An unknown error occurred' });
    }
  }
});
// Función para llenar la entidad Equipo con 10 elementos
async function llenarEquipo() {
  try {
    const nuevosEquipos = [];
    for (let i = 0; i < 10; i++) {
      const nuevoEquipo = await prisma.equipo.create({
        data: {
          Descripcion: `Equipo ${i + 1}`,
          Serie: `Serie ${i % 3 + 1}`,
          entornoId: i % 3 + 1, // Asociar cada equipo a un entorno existente
        },
      });
      nuevosEquipos.push(nuevoEquipo);
    }
    console.log("Se han insertado 10 equipos:", nuevosEquipos);
  } catch (error) {
    console.error("Error al insertar equipos:", error);
  }
}

// Función para llenar la entidad Torneo con 10 elementos
async function llenarTorneo() {
  try {
    const nuevosTorneos = [];
    for (let i = 0; i < 10; i++) {
      const nuevoTorneo = await prisma.torneo.create({
        data: {
          Descripcion: `Torneo ${i + 1}`,
          entornoId: i % 3 + 1, // Asociar cada torneo a un entorno existente
        },
      });
      nuevosTorneos.push(nuevoTorneo);
    }
    console.log("Se han insertado 10 torneos:", nuevosTorneos);
  } catch (error) {
    console.error("Error al insertar torneos:", error);
  }
}

// Función para llenar la entidad Partido con 10 elementos
async function llenarPartido() {
  try {
    const nuevosPartidos = [];
    for (let i = 0; i < 10; i++) {
      const nuevoPartido = await prisma.partido.create({
        data: {
          torneoId: i % 5 + 1, // Asociar cada partido a un torneo existente
          equipo1Id: (i % 10) + 1, // Asociar equipo1 a uno de los 10 equipos creados
          equipo2Id: ((i + 1) % 10) + 1, // Asociar equipo2 a uno de los 10 equipos creados (diferente al equipo1)
          golesEquipo1: Math.floor(Math.random() * 6), // Generar goles aleatorios entre 0 y 5
          golesEquipo2: Math.floor(Math.random() * 6),
          observacion: `Observación del partido ${i + 1}`,
          entornoId: i % 3 + 1, // Asociar cada partido a un entorno existente
        },
      });
      nuevosPartidos.push(nuevoPartido);
    }
    console.log("Se han insertado 10 partidos:", nuevosPartidos);
  } catch (error) {
    console.error("Error al insertar partidos:", error);
  }
}

// Función para llenar la entidad Entorno con 3 elementos
async function llenarEntorno() {
  try {
    const nuevosEntornos = [];
    for (let i = 0; i < 3; i++) {
      const nuevoEntorno = await prisma.entorno.create({
        data: {
          Descripcion: `PRUEBAS ${i + 1}`,
        },
      });
      nuevosEntornos.push(nuevoEntorno);
    }
    console.log("Se han insertado 3 entornos:", nuevosEntornos);
  } catch (error) {
    console.error("Error al insertar entornos:", error);
  }
}

// Función para mostrar todos los partidos con sus atributos relacionados
async function mostrarTodosLosPartidos() {
  try {
    const partidos = await prisma.partido.findMany({
      include: {
        torneo: true,
        equipo1: true,
        entorno: true, // Incluir información del entorno
      },
    });
    console.log("Todos los partidos:", partidos);
  } catch (error) {
    console.error("Error al mostrar todos los partidos:", error);
  }
}

// Función para buscar un partido por su ID y mostrarlo con sus atributos relacionados
async function buscarPartidoPorId(id: number) {
    try {
      const partido = await prisma.partido.findUnique({
        where: {
          idpartido: id,
        },
        include: {
          torneo: true,
          equipo1: true,
          entorno: true, // Incluir información del entorno
        },
      });
      console.log("Partido encontrado:", partido);
    } catch (error) {
      console.error("Error al buscar el partido por su ID:", error);
    }
  }

// Función principal
async function main() {
  // Llenar las entidades con datos iniciales
  await llenarEntorno();
  await llenarEquipo();
  await llenarTorneo();
  await llenarPartido();

  // Buscar y mostrar un partido por su ID
  const idBusqueda = 1; // Reemplazar con el ID deseado
  await buscarPartidoPorId(idBusqueda);

  // Mostrar todos los partidos con sus atributos relacionados
  await mostrarTodosLosPartidos();

  // Desconectar Prisma al finalizar
  await prisma.$disconnect();
}

// Ejecutar la función principal
main().catch(error => console.error("Error en la función principal:", error));

// Rutas de la aplicación...

// Exportar el enrutador
export default router;