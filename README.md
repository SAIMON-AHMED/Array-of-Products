# Array of Products
## Description
The `arrayOfProducts` function takes an array of numbers and returns a new array where each element at index `i` is equal to the product of all the numbers in the original array except the one at `i`. The solution avoids using division and runs in linear time.

## Function Signature
```javascript
function arrayOfProducts(array) {
```

## Parameters
- `array` (Array<number>): An array of integers. It may contain positive, negative, or zero values.

## Returns
- (Array<number>): A new array where each element is the product of all elements in the input array except for the element at the same index.

## Time and Space Complexity
- **Time Complexity:** O(n), where `n` is the length of the input array. The function iterates over the array twice (once from left to right and once from right to left).
- **Space Complexity:** O(n), due to the creation of a new array to store the products.

## Algorithm Explanation
1. Create an array called `products` initialized with `1` for each element.
2. Traverse the input array from left to right:
   - Maintain a running product and assign it to the corresponding index in the `products` array.
3. Traverse the input array from right to left:
   - Multiply each element in the `products` array by a running product from the right.

## Example
```javascript
const inputArray = [1, 2, 3, 4];
const result = arrayOfProducts(inputArray);
console.log(result); // Output: [24, 12, 8, 6]
```
### Explanation:
- For index 0: The product of [2, 3, 4] is 24.
- For index 1: The product of [1, 3, 4] is 12.
- For index 2: The product of [1, 2, 4] is 8.
- For index 3: The product of [1, 2, 3] is 6.

## Edge Cases
- Empty array: Returns an empty array.
- Array with one element: Returns an array with a single `1`.
- Array with zeros: Handles zero values correctly, returning `0` at the appropriate indices.

## Usage
```javascript
const { arrayOfProducts } = require('./yourFileName');

const input = [5, 1, 4, 2];
const output = arrayOfProducts(input);
console.log(output); // Output: [8, 40, 10, 20]
```

## License
This code is provided under the MIT License. Feel free to use, modify, and distribute it as needed.

