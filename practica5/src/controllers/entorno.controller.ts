import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export class EntornoController {
    async getAll(req: Request, res: Response) {
        try {
            const entornos = await prisma.entorno.findMany({
                include: {
                    equipos: true
                }
            });
            res.json(entornos);
        } catch (error) {
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }

    async create(req: Request, res: Response) {
        const { Descripcion } = req.body;
        try {
            const newEntorno = await prisma.entorno.create({
                data: { Descripcion }
            });
            res.json(newEntorno);
        } catch (error) {
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }

    async update(req: Request, res: Response) {
        const { id } = req.params;
        const { Descripcion } = req.body;
        try {
            const updatedEntorno = await prisma.entorno.update({
                where: { identorno: parseInt(id, 10) },
                data: { Descripcion }
            });
            res.json(updatedEntorno);
        } catch (error) {
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }

    async delete(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const deletedEntorno = await prisma.entorno.delete({
                where: { identorno: parseInt(id, 10) },
            });
            res.json(deletedEntorno);
        } catch (error) {
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }
}
