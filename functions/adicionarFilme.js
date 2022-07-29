function adicionarFilme(codigo, titulo, duracao, atores, anoDeLancamento,emCartaz){
   
    let catalogo = require('../database/catalogo.json'); 

    let temp = new Object();
    temp["codigo"] = codigo;
    temp["titulo"] = titulo;
    temp["duracao"] = duracao;
    temp["atores"] = atores;
    temp["anoDeLancamento"] = anoDeLancamento;
    temp["emCartaz"] = emCartaz;
    catalogo.push(temp);

    const salvarFilmes = require('./salvarFilmes');
    salvarFilmes(catalogo);

};

module.exports = adicionarFilme; 