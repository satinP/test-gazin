import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class Developer {

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
