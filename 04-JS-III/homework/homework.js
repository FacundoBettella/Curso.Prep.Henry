// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un array
  // Tu código:
  return array[0];
}
//console.log(devolverPrimerElemento(array));

function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  return array[array.length -1];
}
//console.log(devolverUltimoElemento(array));
// array[indice];

function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  return array.length;
}
//console.log(obtenerLargoDelArray);

function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  //[1, 2 , 3, 4] => [2, 3, 4, 5]
  //La var i recorrera cada elemento del length del array, para sumar +1 a c/u.
  for(var i = 0; i < array.length; i++){
    array[i] = array[i] + 1; //Aqui la variable es notificada a aumentar + 1 en cada iteración dentro del array. Es decir, entro al valor 0 (index 0) del array, y le sumo 1. 
  }
  return array;
}
//console.log(incrementarPorUno(array));

function agregarItemAlFinalDelArray(array, elemento){
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  array.push(elemento); //Primero pusheo el elemento.
  return array; //Segundo lo devuelvo.
}
//console.log(agregarItemAlFinalDelArray(array));

function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array.unshift(elemento); //Primero agreo al inicio "unshift" del array el elemento.
  return array; //Segundo lo devuelvo.
}
//console.log(agregarItemAlComiendoDelArray(array));

function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  
  return palabras.join(" "); //join() une todos los elementos de una matriz (o un objeto similar) en una cadena y devuelve esta cadena.
}
//console.log(dePalabrasAFrase(["Hello", "world!"]));

//Segunda forma de resolverlo(+heavy):
//function dePalabrasAFrase(palabras) {
/*var resultado = "";
  for (i = 0; i < palabras.length; i++){
    resultado = resultado + palabras[i]; 
   if (i !== palabras.length - 1){ //palabras.length - 1 = Último lugar de palabras.
    resultado = resultado + " ";
  }
}
  return resultado;
}
console.log(dePalabrasAFrase(["Hello", "world", "!",]));*/


function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  for( var i = 0; i < array.length; i++){
    if(array[i] === elemento) {
    return true;
    }
  } 
  return false;
}
//console.log(arrayContiene(array));

function agregarNumeros(numeros) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  //const numeros = [1, 2, 3, 4]
  var resultado = 0;
  for (i = 0; i < numeros.length; i ++){
    resultado = resultado + numeros[i];
  }
    return resultado;
}
//console.log(agregarNumeros(numeros));

function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  var resultado = 0;
  for (i = 0; i < resultadosTest.length; i++){
    resultado = resultado + resultadosTest[i];
  }
  return resultado / resultadosTest.length;
}
//console.log(promedioResultadosTest(resultadosTest));

function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  var numeroMayor = 0;
  for ( i = 0; i < numeros.length; i++){
    if (numeros[i] > numeroMayor){
      numeroMayor = numeros[i]; //numeroMayor se convierte en el numero[i], es decir, donde [i] se encuntre y sea mayor a numeroMayor.
    }
  }
  return numeroMayor;
}
//console.log(numeroMasGrande(numeros));

function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0
  // Si se pasa un argumento, simplemente devuélvelo
  // Tu código:
  if (arguments.length < 1) return 0;
  var resultado = 1;                          //1 es el multiplicador inicial, no es 0 porque todo num x 0 es 0.
  for (i = 0; i < arguments.length; i++) {
    resultado = resultado * arguments[i];
  }
  return resultado;
}
//console.log(multiplicarArgumentos(1));


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
};
