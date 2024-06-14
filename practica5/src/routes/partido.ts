import { Router } from 'express';
import { PartidoController } from '../controllers/partido.controller';

const router = Router();
const partidoController = new PartidoController();

router.get('/', partidoController.getAll);
router.post('/', partidoController.create);
router.put('/:id', partidoController.update);
router.delete('/:id', partidoController.delete);

export default router;
