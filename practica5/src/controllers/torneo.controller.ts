import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export class TorneoController {
    async getAll(req: Request, res: Response) {
        try {
            const torneos = await prisma.torneo.findMany();
            res.json(torneos);
        } catch (error) {
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }

    async create(req: Request, res: Response) {
        const { Descripcion, entornoId } = req.body;
        try {
            const newTorneo = await prisma.torneo.create({
                data: { Descripcion, Estado: 'Activo', entornoId }
            });
            res.json(newTorneo);
        } catch (error) {
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }

    async update(req: Request, res: Response) {
        const { id } = req.params;
        const { Descripcion } = req.body;
        try {
            const updatedTorneo = await prisma.torneo.update({
                where: { idtorneo: parseInt(id, 10) },
                data: { Descripcion }
            });
            res.json(updatedTorneo);
        } catch (error) {
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }

    async delete(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const deletedTorneo = await prisma.torneo.update({
                where: { idtorneo: parseInt(id, 10) },
                data: { Estado: 'Eliminado' }
            });
            res.json(deletedTorneo);
        } catch (error) {
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }
}
