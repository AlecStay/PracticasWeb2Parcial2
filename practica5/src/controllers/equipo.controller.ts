import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export class EquipoController {
    async getAll(req: Request, res: Response) {
        try {
            const equipos = await prisma.equipo.findMany();
            if (equipos.length === 0) {
                res.json({ message: 'No hay equipos disponibles', estado: 'Pendiente' });
            } else {
                res.json(equipos);
            }
        } catch (error) {
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }

    async create(req: Request, res: Response) {
        const { Descripcion, Serie, entornoId } = req.body;
        try {
            const newEquipo = await prisma.equipo.create({
                data: { Descripcion, Serie, Estado: 'Activo', entornoId }
            });
            res.json(newEquipo);
        } catch (error) {
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }

    async update(req: Request, res: Response) {
        const { id } = req.params;
        const { Descripcion, Serie } = req.body;
        try {
            const updatedEquipo = await prisma.equipo.update({
                where: { idequipo: parseInt(id, 10) },
                data: { Descripcion, Serie }
            });
            res.json(updatedEquipo);
        } catch (error) {
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }

    async delete(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const deletedEquipo = await prisma.equipo.update({
                where: { idequipo: parseInt(id, 10) },
                data: { Estado: 'Eliminado' }
            });
            res.json(deletedEquipo);
        } catch (error) {
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }

    async getById(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const equipo = await prisma.equipo.findUnique({
                where: { idequipo: parseInt(id, 10) },
            });
            if (equipo) {
                res.json(equipo);
            } else {
                res.status(404).json({ status: 'Pendiente', message: 'Equipo no encontrado' });
            }
        } catch (error) {
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }
}
