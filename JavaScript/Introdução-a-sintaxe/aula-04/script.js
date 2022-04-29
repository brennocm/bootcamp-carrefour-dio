var jogador = 0;
var jogador2 = 0;
var placar;

if (jogador > 0) {
    console.log('Jogador 1 marcou ponto.');
} else if (jogador2 > 0) {
    console.log('Jogador 2 marcou ponto.')
} else{
    console.log('Nenhum jogador marcou ponto.')
}

//if ternário
jogador != -1 && jogador2 != -1 ? console.log('Os jogadores são válidos') : console.log('Jogadores Inválidos');

switch (placar){
    case placar = jogador > jogador2:
        console.log('Jogador 1 ganhou');
        break;
        case placar = jogador < jogador2:
            console.log('jogador 2 ganhou');
        break;
        default:
        console.log('Ninguém ganhou');
}

let array = ['valor1', 'valor2', 'valor3', 'valor4', 'valor5' ];
let object = {propriedade1: 'valor1', propriedade2: 'valor2', propriedade3: 'valor3'};

// for - executa uma instrução até que ela seja falsa
for (let indice = 0; indice < array.length; indice++){
    console.log(indice);
}

// for/in executa a repetição a partir de uma propriedade
for(let i in array){
    console.log(i);
}

//for/in com object
for(i in object){
    console.log(i);
}

for (i of array){
    console.log(i);
}

for(i of object.propriedade1){
    console.log(i);
}

var a = 0;
while (a < 10){
    a++;
    console.log(a);
}
 do {
     console.log(a);
 } while(a < 10)
