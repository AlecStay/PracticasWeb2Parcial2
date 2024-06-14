import { Router } from 'express';
import { EntornoController } from '../controllers/entorno.controller';

const router = Router();
const entornoController = new EntornoController();

router.get('/', entornoController.getAll);
router.post('/', entornoController.create);
router.put('/:id', entornoController.update);
router.delete('/:id', entornoController.delete);

export default router;
