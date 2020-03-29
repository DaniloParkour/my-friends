const express = require('express');
const cors = require('cors');
const {errors} = require('celebrate');
const routes = require('./routes');

const app = express(); //Creating the application

//CORS no ambiente de desenvolvimento
app.use(cors());

//With the line above, every request with body the express'll convert the body request from JSON to JS Literal Object
app.use(express.json());

app.use(routes);

app.use(errors());

/*
CORS no ambiente de produção
app.use(cors({
   origin: 'http://myfriends.com'
}));
*/


/*
Params Type
1) Query Params (?): Params are defined after the "?" of URL
   http://localhost:3333/users Without Query Params
   http://localhost:3333/users?name=Danilo&age=31 With Query Params

   const params = request.query;

2) Route Params (:) Params used to identify resources
   http://localhost:3333/users/1
   OBS: The Back-End verify the '/:id' ==> app.post('/users/:id', (request, response) { ... }

   const params = request.params;

3) Request Bady => Bady os request.
   It used for exemple to send informations about the user:
   Name, E-Mail, Profission, ...
   It possible edit a existent profile sending just the necessary informations to change

   Use POST and sand like a JSON

   SQL: MySQL, SQLite, PostgreeSQL, Oracle, Microsoft SQL Server
   NoSQL: MongoDB, CouchBD, ...


*/

/*_________________________________________________________________________________________________________________
OBS: This part will be used on ROUTES.JS file.

//app.get() => 1: Route, 2: Function Like (request, response) { ... }
app.get('/users', (request, response) => {
//app.get('/users/:id', (request, response) => { //The EXPRESS ever inject the parameter request and response 
//app.post('/users', (request, response) => {

    //const params = request.query; //Using the Query Params (.../?name=Ian&age=25)
    //const params = request.params; //Using the Route Params (.../1)
    //const body = request.body;

    //params.name
    //params.age

    //console.log(params); //It'll shows the params name and age like a json.
    //console.log(body);

    return response.send({
        nome: 'Danilo Carvalho',
        score: '1200'
    });
});
_____________________________________________________________________________________________________________________
*/

//app.get('/contatos');

//app.listen(3333); //Listen 3333 port
module.exports = app;
