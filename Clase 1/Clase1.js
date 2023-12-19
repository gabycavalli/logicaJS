let x = 20;
var y = 20;

function ejemploLet() {
  if (true) {
    let x = 10;
    console.log(`El valor en el if de X es: ${x}`); // 10
  }
  console.log(`El valor fuera del if de X es: ${x}`); // 20
}

ejemploLet();

function ejemploVar() {
  if (true) {
    var y = 10;
    console.log(`El valor en el if de Y es: ${y}`); // 10
  }
  console.log(`El valor fuera del if de Y es: ${y}`); // 10
}

ejemploVar();

function suma(a, b) {
  let sumar = a + b;
  return console.log(`La suma de ${a} + ${b} es: ${sumar}`);
}
suma(2, 3);
/*
La quinta parte de dicho valor, 
mostrame El resto de la división de 3 / 2 = 1  
El resto de la división de los numeros por 5 
*/

function resto(numerador, denominador) {
  let resultado = numerador / denominador;
  console.log(resultado);
}
resto(10, 8);
