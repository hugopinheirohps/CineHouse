
const fs = require('fs');
const path = require('path');

const salvarFilmes = (filme) => {
    
    let arquivo = path.resolve(__dirname + '/../database/catalogo.json');
    let json = JSON.stringify(filme, null, 4);
        
    fs.writeFileSync(arquivo, json);

};
//const catalogo = require('../database/catalogo.json');
//catalogo.push({titulo:"A Jornada de uma Turma!"});
//salvarFilmes(catalogo);

module.exports = salvarFilmes; 