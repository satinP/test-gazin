const DATABASE_ERROR: string = 'Houve um erro no banco de dados.';

export function dataBaseError<R, E> (response, error) {
  //TODO - Retornar erro "pretty" do banco.
  return response.status(500).send(DATABASE_ERROR);
}