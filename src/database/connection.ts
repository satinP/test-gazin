import { createConnection } from 'typeorm';

export const conectarNoBanco = async () => {
  const conexao = await createConnection();

  process.on('SIGINT', ()=> {conexao.close()})
}