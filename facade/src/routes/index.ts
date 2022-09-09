import { Router } from 'express';
import healthRoutes from '@routes/healthRoutes';

const router = Router();

router.use('/health', healthRoutes);

export default router;
