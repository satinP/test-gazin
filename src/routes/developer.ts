import { Router } from 'express';
import DeveloperController from '../controllers/DeveloperController';
import { Developer } from '../entity/Developer';

export const routerDeveloper = Router();

const developerController = new DeveloperController();

routerDeveloper.get('/', async (req, res) => {
  if (req.query) {
    const { nome, idade, sexo, hobby } = req.query;
    const developer = new Developer(nome as string, idade as any, sexo as string, hobby as string);
    const developerResponse = await developerController.getDeveloper(developer);
    res.send(developerResponse);
  }

  const developers = await developerController.get();
  res.send(developers);
});

routerDeveloper.get('/:id', async (req, res) => {
  const idDeveloper = parseInt(req.params.id);
  if (req.params) {
    const developerResponse = await developerController.getDeveloperById(idDeveloper);
    res.send(developerResponse);
  }

});

routerDeveloper.post('/', async (req, res) => {
  const {nome, idade, sexo, hobby} = req.body;

  const developer = new Developer(nome, idade, sexo, hobby);

  const developerSalvo = await developerController.post(developer);

  res.send(developerSalvo);
});

routerDeveloper.put('/:id', async (req, res) => {
  const idDeveloper = parseInt(req.params.id);
  const {nome, idade, sexo, hobby} = req.body;
  const developer = new Developer(nome, idade, sexo, hobby);

  const developerSalvo = await developerController.put(idDeveloper, developer);

  res.send(developerSalvo);
});

routerDeveloper.delete('/:id', async (req, res) => {
  const idDeveloper = parseInt(req.params.id);

  const developerDeletado = await developerController.delete(idDeveloper);

  res.send(developerDeletado);
});