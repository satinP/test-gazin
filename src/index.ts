import "reflect-metadata";
import {createConnection} from "typeorm";
import {Developer} from "./entity/Developer";

createConnection().then(async connection => {

    console.log("Inserting a new user into the database...");
    const developer = new Developer();
    developer.nome = "Timber";
    developer.sexo = "M";
    developer.idade = 25;
    await connection.manager.save(developer);
    console.log("Saved a new developer with id: " + developer.id);

    console.log("Loading developers from the database...");
    const developers = await connection.manager.find(Developer);
    console.log("Loaded developers: ", developers);

    console.log("Here you can setup and run express/koa/any other framework.");

}).catch(error => console.log(error));
