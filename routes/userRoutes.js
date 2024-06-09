import { Router } from 'express';
import { userController } from '../controllers/userController.js';
import { createUserValid, updateUserValid} from '../middlewares/user.validation.middleware.js';
import { responseMiddleware } from '../middlewares/response.middleware.js';

const router = Router();

router.post('/', createUserValid, userController.create, responseMiddleware);

router.put('/:id', updateUserValid, userController.edit, responseMiddleware);

router.delete('/:id', userController.remove, responseMiddleware);

router.get('/', userController.getAll, responseMiddleware);

router.get('/:id', userController.getCurrent, responseMiddleware);

export { router };