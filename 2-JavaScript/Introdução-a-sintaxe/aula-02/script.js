//Boolean
var vOUf = false;
console.log(typeof(vOUf));

//Number
var numeroQualquer = 1;
console.log(typeof(numeroQualquer));

//String
var nome = 'Brenno';
console.log(typeof(nome));


var escopoGlobal = 'global';
console.log(escopoGlobal);

function escopoLocal(){
    let escopoInterno = 'local';
    console.log(escopoInterno);
}

escopoLocal();

//comparação
var comparacao = '0'
var comparacao1 = comparacao == 0
console.log(comparacao1);

//comparacao identica

var comparacaoIdentica = '0' === 0;
console.log(comparacaoIdentica);