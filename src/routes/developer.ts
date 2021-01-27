import { Router } from 'express';
import DeveloperController from '../controllers/DeveloperController';

export const routerDeveloper = Router();

const developerController = new DeveloperController();

routerDeveloper.get('/', developerController.get);
