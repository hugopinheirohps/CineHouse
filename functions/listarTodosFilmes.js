function listarTodosFilmes()
{
    let catalogo = require('../database/catalogo.json'); 
    const buscarFilme = require('./buscarFilme');

    console.log("\nLista de filmes:");

    for(let i=1;i<=catalogo.length; i++)
    {
        buscarFilme(i);
    }

}

module.exports = listarTodosFilmes; 