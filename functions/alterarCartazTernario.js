function alterarCartazTernario(codigo){

    let catalogo = require('../database/catalogo.json'); 

    let resultado = catalogo.find(elemento => elemento.codigo === codigo);

    //console.log("O filme buscado é :'" + resultado.titulo + "'");
    
    if(resultado != null)
    {        
        console.table(resultado);
        //console.log("Em Cartaz? " + resultado.emCartaz);
        resultado.emCartaz == true ? resultado.emCartaz = false : resultado.emCartaz = true;
        console.table(resultado);
        //console.log("Em Cartaz agora? " + resultado.emCartaz);
    }
    
    resultado == null ? console.log("O filme "+ codigo+ " não foi encontrado.") : console.log() ;

};


module.exports = alterarCartazTernario; 