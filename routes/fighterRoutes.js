import { Router } from 'express';
import { fighterController } from '../controllers/fighterController.js';
import { createFighterValid, updateFighterValid} from '../middlewares/fighter.validation.middleware.js';
import { responseMiddleware } from '../middlewares/response.middleware.js';

const router = Router();

router.get('/', fighterController.getAll, responseMiddleware);

router.get('/:id', fighterController.getCurrent, responseMiddleware);

router.post('/', createFighterValid, fighterController.create, responseMiddleware);

router.put('/:id', updateFighterValid, fighterController.edit, responseMiddleware);

router.delete('/:id', fighterController.remove, responseMiddleware);

export { router };