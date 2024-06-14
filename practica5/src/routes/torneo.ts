import { Router } from 'express';
import { TorneoController } from '../controllers/torneo.controller';

const router = Router();
const torneoController = new TorneoController();

router.get('/', torneoController.getAll);
router.post('/', torneoController.create);
router.put('/:id', torneoController.update);
router.delete('/:id', torneoController.delete);

export default router;
