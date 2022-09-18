// const { Person } = require("./person");
const dotenv = require("dotenv");

const connectToDatabase = require("./src/database/connect");

dotenv.config();

connectToDatabase();

// require("./modules/path");
// require("./modules/fs");
// require("./modules/http");
require("./modules/express");

// const person = new Person("Diogo");

/*
Eu não sei pq, mas em 55:54 eu deixei o apt.get() do jeitinho que está mostrando no vídeo, e no nodemon rodou belezinha sem mensagem de erro, porém dessa vez ao tentar abrir o localhost:8080/home o Chrome fazia download do arquivo home ao invés de abrir a página. Eu não entendi o pq, mas então modifiquei essa parte:

res.contentType("application/html");
res.status(200).send("<h1> Hello, world! </h1>");

Para igual estava no arquivo html.js, que era assim:

res.writeHead(200, { 'Content-type': 'text/html' });
res.end("<h1> Hello, world! </h1>");

Então nesse caso a página rodou belezinha, e inclusive apareceu o Content-Type na parte de Inspacionar Elemento. Gostaria de saber por favor se alguém sabe o que pode ter acontecido para meu navegador ficar fazendo download da página ao invés de abrir.

Anyway, obrigado pelo vídeo, Felipe. Me inscrevi no canal.
*/