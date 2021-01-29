import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class Developer {

	constructor(nome: string, idade: number, sexo: string, hobby: string) {
		this.nome = nome;
		this.idade = idade;
		this.sexo = sexo;
		this.hobby = hobby;
	}

	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	nome: string;

	@Column({type: "char" , length: 1})
	sexo;

	@Column()
	idade: number;

	@Column({nullable: true})
	hobby: string;

}
