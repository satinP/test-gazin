import { Router } from 'express';
import { routerDeveloper } from './routes/developer';

const routes = Router();

routes.use('/developer', routerDeveloper);

export default routes;