import { Router } from 'express';
import DeveloperController from '../controllers/DeveloperController';
import { Developer } from '../entity/Developer';
import { dataBaseError } from '../utils/util';

export const routerDeveloper = Router();

const developerController = new DeveloperController();

routerDeveloper.get('/', async (req, res) => {
  if (req.query) {
    const { nome, idade, sexo, hobby } = req.query;
    try {
      const developer = new Developer(nome as string, idade as any, 
                                      sexo as string, hobby as string);
      const developersResponse = await developerController.getDeveloper(developer);
      return res.status(200).send(developersResponse);
    } catch (e) {
      return dataBaseError(res,e);
    }
  }

  try {
    const developers = await developerController.get();
    return res.status(200).send(developers);
  } catch (e) {
    return dataBaseError(res,e);
  }
});

routerDeveloper.get('/:id', async (req, res) => {
  const idDeveloper = parseInt(req.params.id);
  try {
    const developer = await developerController.getDeveloperById(idDeveloper);
    return res.status(200).send(developer);
  } catch (e) {
    return dataBaseError(res,e);
  }
});

routerDeveloper.post('/', async (req, res) => {
  const { nome, idade, sexo, hobby } = req.body;

  if (!nome || !idade || !sexo || !hobby) {
    return res.status(400).send(`É preciso informar os campos nome, idade, 
                          sexo e hobby no corpo da requisição`);
  }

  const developer = new Developer(nome, idade, sexo, hobby);

  try {
    const savedDeveloper = await developerController.post(developer);
    return res.status(200).send(savedDeveloper);
  } catch (e){
    return dataBaseError(res,e);
  }
});

routerDeveloper.put('/:id', async (req, res) => {
  const idDeveloper = parseInt(req.params.id);
  let developer: Developer;

  try {
    developer = await developerController.getDeveloperById(idDeveloper);

    if (developer) {
      await developerController.put(idDeveloper, developer);
      return res.status(200).send(`Developer de id ${idDeveloper} foi atualizado.`);
    } else {
      return res.status(400).send(`Developer de id ${idDeveloper} não existe.`)
    }
  } catch (e) {
    return dataBaseError(res,e);
  }
});

routerDeveloper.delete('/:id', async (req, res) => {
  const idDeveloper = parseInt(req.params.id);
  let developer: Developer;
  
  try {
    developer = await developerController.getDeveloperById(idDeveloper);
    if (developer) {
      await developerController.delete(idDeveloper);
      return res.status(204).send();
    } else {
      return res.status(400).send(`Developer id ${idDeveloper} não existe.`)
    }
  } catch(e){
    return dataBaseError(res,e);
  }
});

