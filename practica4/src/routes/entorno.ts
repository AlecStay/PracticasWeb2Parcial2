import { Router, Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const router = Router();

router.get('/', async (req: Request, res: Response) => {
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
});

router.post('/', async (req: Request, res: Response) => {
    const { Descripcion } = req.body;
    try {
        const newEntorno = await prisma.entorno.create({
            data: { Descripcion }
        });
        res.json(newEntorno);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.put('/:id', async (req: Request, res: Response) => {
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
});

router.delete('/:id', async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const deletedEntorno = await prisma.entorno.delete({
            where: { identorno: parseInt(id, 10) },
        });
        res.json(deletedEntorno);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

export default router;
