const heroes = ["Flash", "Batman", "Superman", "Goku"];
console.log(heroes);

console.log(heroes[1]); //acceder a sus posiciones jaja

let addFirst = heroes.unshift("Rick"); //agregar un elemento al principio del array
console.log(addFirst);
console.log(heroes);

let add = heroes.push("boss"); //agregar un elemento al final del array
console.log(heroes);

let deleteFirst = heroes.shift(); //Elimina el primer elemento de un array
console.log(deleteFirst);
console.log(heroes);

let deleteLast = heroes.pop(); //Eliminal el ultimo elemento del array
console.log(deleteLast);
console.log(heroes);

let keepHeroe = heroes.indexOf("Goku"); //encontrar el indice de un elemento del array
console.log(heroes);
console.log(keepHeroe);

let deleteOneElement = heroes.splice(0, 3); //elimninar un elemento cualquiera por su posicion
console.log(deleteOneElement);
console.log(heroes);
//recorrer al arr y usar metodo lenght para saber su longitud
for (let i = 0; i < heroes.length; i++) {
  console.log(i);
}

function simpleArraySum(ar) {
  // Write your code here
  let sum = 0;
  for (let i = 0; i < ar.length; i++) {
    sum += ar[i];
  }

  return sum;
}


function aVeryBigSum(ar) {
    // Write your code here
    let sum = ar.reduce((a, b) => a + b)
    return sum

}

const j = [1000000001, 1000000002, 1000000003, 1000000004, 1000000005];
console.log(aVeryBigSum(j));

let n = 5
let a = [-2,-1,0,1,2]
let k = 3

const colores = ["rojo", "verde", "azul"];
colores[1] = "amarillo";
console.log(colores)
