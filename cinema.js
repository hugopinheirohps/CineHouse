let cinema = 'Cinemark';

// Definido a ação a ser realizada
let acao = process.argv[2];
let valor = process.argv[3];

console.log("Bem vindo ao Cinema " + cinema);

// Importar as dependências
const adicionarFilme = require('./functions/adicionarFilme');
const salvarFilmes = require('./functions/salvarFilmes');
const alterarCartaz = require('./functions/alterarCartaz');
const alterarCartazTernario = require('./functions/alterarCartazTernario');
const buscarFilme = require('./functions/buscarFilme');
const listarFilmesCartaz = require('./functions/listarFilmesCartaz');
const listarTodosFilmes = require('./functions/listarTodosFilmes');

switch(acao){
    
    case 'adicionarFilme':
        adicionarFilme(7,'O Silêncio dos Inocentes',2.00,'Antony Hoppinks',1999,false);
        buscarFilme(7);
    break;    

    case 'alterarCartaz':
        alterarCartaz(parseInt(valor));
    break;

    case 'alterarCartazTernario':
        alterarCartazTernario(parseInt(valor));
    break;

    case 'buscarFilme':
        buscarFilme(parseInt(valor));
    break;
   
    case 'listarFilmesCartaz':
        listarFilmesCartaz();
    break;

    case 'listarTodosFilmes':
        listarTodosFilmes();
    break;

    default:
        console.error("Comando não encontrado");
    
}