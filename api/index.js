const express = require("express");
const server = express();
const users = require('./src/data/users.json');
const products = require('./src/data/products.json');

server.get('/users', (req,res) => {
    return res.json(users)
})
server.get('/products', (req,res) => {
    return res.json(products)
})

server.listen(3000, () => {
    console.log('Servidor funcionando (ouvindo na porta 3000)')
});
