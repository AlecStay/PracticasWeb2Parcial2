import { Router } from 'express';
import { EquipoController } from '../controllers/equipo.controller';

const router = Router();
const equipoController = new EquipoController();

// Rutas para equipos
router.get('/', equipoController.getAll);
router.post('/', equipoController.create);
router.put('/:id', equipoController.update);
router.delete('/:id', equipoController.delete);
router.get('/:id', equipoController.getById); // Ruta adicional para obtener un equipo por ID

export default router;
