// Time -> O(n) | Space -> O(n)
function arrayOfProducts(array) {

  let len = array.length;
  const products = new Array(len).fill(1);

  let runningProduct = 1;
  for (let i = 0; i < len; i++) {
    products[i] = runningProduct;
    runningProduct *= array[i];
  }

  runningProduct = 1;
  for (let i = len - 1; i >= 0; i--) {
    products[i] *= runningProduct;
    runningProduct *= array[i]; 
  }

  return products;
}

