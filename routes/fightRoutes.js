import { Router } from 'express';
import { responseMiddleware } from '../middlewares/response.middleware.js';
import { fightsController } from '../controllers/fightsController.js';

const router = Router();

router.get('/', fightsController.getAll, responseMiddleware);

router.get('/:id', fightsController.getCurrent, responseMiddleware);

export { router };