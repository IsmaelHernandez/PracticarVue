const arr = [1, 2, 3, 4, 5];

function miniMaxSum(arr) {
  let sumaMin = arr[0];
    let sumaMax = arr[0];
    let sumTotal = 0;

  for (let i = 0; i < arr.length; i++) {
    sumTotal += arr[i];

    if (arr[i] < sumaMin) {
      sumaMin = arr[i];
    }

    if (arr[i] > sumaMax) {
      sumaMax = arr[i];
    }
  }

  const minSum = sumTotal - sumaMax;
  const maxSum = sumTotal - sumaMin;

  return [minSum, maxSum];
}

console.log(miniMaxSum(arr))