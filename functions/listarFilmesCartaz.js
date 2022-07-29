function listarFilmesCartaz(){

    let catalogo = require('../database/catalogo.json'); 
    const buscarFilme = require('./buscarFilme');


    console.log("\nLista de filmes em cartaz:");

    for(let i=1;i<=catalogo.length; i++)
    {
        let pesquisado = catalogo.find(elemento => elemento.codigo == i);
        pesquisado.emCartaz == true ? buscarFilme(i): console.log() ;
    }
    
};

module.exports = listarFilmesCartaz; 