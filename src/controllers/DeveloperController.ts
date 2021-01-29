import { getManager } from 'typeorm';
import { Developer } from '../entity/Developer';
export default class DeveloperController {

  async get() {
    const usuarios = await getManager().find(Developer);
    return usuarios;
  }

  async getDeveloper(developer: Developer) {
    const nome = developer.nome ? developer.nome : '';
    const idade = developer.idade ? developer.idade : '';
    const sexo = developer.sexo ? developer.sexo : '';
    const hobby = developer.hobby ? developer.hobby : '';

    const usuarios = await getManager()
                          .query(`SELECT D.* FROM DEVELOPER D
                                  WHERE 1=1
                                    AND (
                                          NOME LIKE '%${nome}%'
                                          ${idade ? `OR IDADE = ${idade}` : ''}
                                          ${sexo ? `OR SEXO = ${sexo}` : ''}
                                          OR HOBBY LIKE '%${hobby}%');`
                                );
    return usuarios;
  }

  async getDeveloperById(id: number) {
    const usuario = await getManager()
                          .findOne(Developer, id);
    return usuario;
  }

  async post(developer: Developer) {
    const developerSalvo = await getManager().save(developer);
    return developerSalvo;
  }

  async put(id: number, developer: Developer) {
    await getManager().update(Developer, id, developer );
    const developerAtualizado = await getManager().findOne(Developer, id);
    return developerAtualizado;
  }

  async delete(id: number) {
    await getManager().delete(Developer, id);
    const developerDeletado = await getManager().findOne(Developer, id);
    return developerDeletado;
  }

}