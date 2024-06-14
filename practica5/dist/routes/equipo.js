"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const router = (0, express_1.Router)();
router.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const equipos = yield prisma.equipo.findMany();
        if (equipos.length === 0) {
            res.json({ message: 'No hay equipos disponibles', estado: 'Pendiente' });
        }
        else {
            res.json(equipos);
        }
    }
    catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
}));
router.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { Descripcion, Serie, entornoId } = req.body; // Agrega entornoId al cuerpo de la solicitud
    try {
        const newEquipo = yield prisma.equipo.create({
            data: { Descripcion, Serie, Estado: 'Activo', entornoId } // Incluye entornoId al crear un nuevo equipo
        });
        res.json(newEquipo);
    }
    catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
}));
router.put('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { Descripcion, Serie } = req.body;
    try {
        const updatedEquipo = yield prisma.equipo.update({
            where: { idequipo: parseInt(id, 10) },
            data: { Descripcion, Serie }
        });
        res.json(updatedEquipo);
    }
    catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
}));
router.delete('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const updatedEquipo = yield prisma.equipo.update({
            where: { idequipo: parseInt(id, 10) },
            data: { Estado: 'Eliminado' }
        });
        res.json(updatedEquipo);
    }
    catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
}));
router.get('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const equipo = yield prisma.equipo.findUnique({
            where: { idequipo: parseInt(id, 10) },
        });
        if (equipo) {
            res.json(equipo);
        }
        else {
            res.status(404).json({ status: 'Pendiente', message: 'Equipo no encontrado' });
        }
    }
    catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
}));
exports.default = router;
