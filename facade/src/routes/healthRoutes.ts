import { Router } from 'express';
import healthController from '@controllers/healthController';

const router = Router();

router.get('/', healthController.health);

export default router;
