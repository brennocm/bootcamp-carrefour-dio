//O que são vetores ou arrays

//Como declarar um array
let array = ['string', 1, true];
console.log(array);

let array1 = ['string', 1, true, ['array1'], ['array2'], ['array3'], ['array4']];
console.log(array1);

//foreach
array1.forEach(function(item, index){console.log(item, index)});

//Push
array1.push('novo item');
console.log(array1)

//Pop
array1.pop();
console.log(array1);

//Shift
array1.shift();
console.log(array1);

//Unshift
array1.unshift('string');
console.log(array1)

//indexOf
console.log(array1.indexOf('string'));

//splice
array1.splice(0, 3);
console.log(array1);

//slice
let novoArray = array.slice(0, 3);
console.log(novoArray);

//Objeto
let object = {string: 'string', number: 1, boolean: true, array:["array"] , objectInterno: { objectInterno: 'objeto interno'}};
console.log(object.objectInterno);

var string = object.string;
console.log(string);

var arrayInterno = object.array;
console.log(arrayInterno);

var { string, boolean, objectInterno } = object;
console.log(string, boolean, objectInterno);