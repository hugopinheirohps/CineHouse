function alterarCartaz(codigo){

    let catalogo = require('../database/catalogo.json'); 

    let resultado = catalogo.find(elemento => elemento.codigo === codigo);

    if(resultado != null)
    {        
        console.table(resultado);
        //console.log("Em Cartaz? " + resultado.emCartaz);
        if(resultado.emCartaz){
            resultado.emCartaz = false;
        }
        else{
            resultado.emCartaz = true;
        }
        //console.log("Em Cartaz agora? " + resultado.emCartaz);
        console.table(resultado);
    }
    else
    {
        console.log("O filme "+ codigo+ " não foi encontrado.");
    }  

};


module.exports = alterarCartaz; 