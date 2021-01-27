import { Request, Response } from 'express'
import { getManager } from 'typeorm';
import { Developer } from '../entity/Developer';


export default class DeveloperController {

  async get(req: Request, res: Response) {
    var x = req.query;

    const usuarios = await getManager().find(Developer);
    return res.json(usuarios);
  }

}