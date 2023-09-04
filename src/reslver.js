/* Función descriptiva

Complete la función miniMaxSum en el editor a continuación.

miniMaxSum tiene los siguientes parámetros:

arr: una matriz de números enteros
Imprimir

Imprime dos números enteros separados por espacios en una línea: la suma mínima y la suma máxima de elementos.

Formato de entrada

Una sola línea de cinco números enteros separados por espacios. */

const arr = [1,3,5,7,9];

function miniMaxSum(arr) {
  //ordeno el array de forma ascendente
  arr.sort((a, b) => a - b);
  //suma minima
  const minSum = arr[0] + arr[1] + arr[2] + arr[3];
  //suma maxima
  const maxSum = arr[1] + arr[2] + arr[3] + arr[4];
  
   console.log(minSum + " " + maxSum);

}

console.log(miniMaxSum(arr))