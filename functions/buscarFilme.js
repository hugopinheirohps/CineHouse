function buscarFilme(codigo){

    let catalogo = require('../database/catalogo.json'); 

    let resultado = catalogo.find(elemento => elemento.codigo == codigo);
    if(resultado != null)
    {
        //console.log("O filme buscado é :'" + resultado.titulo + "'");
        console.table(resultado);
    }
    else
    {
        console.log("O filme "+ codigo+ " não foi encontrado.");
    }
    
};

module.exports = buscarFilme; 