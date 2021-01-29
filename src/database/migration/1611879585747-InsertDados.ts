import {MigrationInterface, QueryRunner} from "typeorm";

export class InsertDados1611879585747 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`INSERT INTO DEVELOPER (NOME, IDADE, SEXO, HOBBY) 
                                VALUES ('Pedro', 21, 'M', 'Codarr');
                                
                                INSERT INTO DEVELOPER (NOME, IDADE, SEXO, HOBBY) 
                                VALUES ('Roberto', 30, 'M', 'Pescar, Futebol');
                                
                                INSERT INTO DEVELOPER (NOME, IDADE, SEXO, HOBBY) 
                                VALUES ('Laura', 22, 'F', 'Ler, Correr');
                                
                                INSERT INTO DEVELOPER (NOME, IDADE, SEXO, HOBBY) 
                                VALUES ('Daniela', 20, 'F', 'Viajar');
                                
                                INSERT INTO DEVELOPER (NOME, IDADE, SEXO, HOBBY) 
                                VALUES ('Cristina', 51, 'F', 'Cantar, Cozinhar');
                                
                                INSERT INTO DEVELOPER (NOME, IDADE, SEXO, HOBBY) 
                                VALUES ('Carlos', 23, 'M', 'Academia, Esportes, Viajar');`)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`TRUNCATE DEVELOPER`)
    }

}
