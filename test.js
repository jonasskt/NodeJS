const express = require('express');
const app = express();
const handlebars = require('express-handlebars');


//Config
 //Teamplate engine 
    app.engine('handlebars', handlebars.engine({defaultLayout: 'main'}));
    app.set('view engine', 'handlebars');

 //COnectando ao banco de dados
        const Sequelize = require('sequelize');
        const sequelize = new Sequelize('test', 'root', 'vidaloka013', {
            host: 'localhost',
            dialect: 'mysql'
})
//----------------------------------------
//Rotas 
app.get('/cadastro', (req, res)=>{
    res.render('formulario')
})

app.post('/adicionado', (req,res)=>{
    res.send("Formulário enviado!")
})

app.listen(3000, (err, res)=>{
    if (err) throw err
    console.log("Servidor conectado!")
})
