// The entry file of your WebAssembly module.

export {steps} from './collatz';
export {reverseString} from './reverse';
export { squareOfSum, sumOfSquares, difference } from './sumSquares';

export function add(a: i32, b: i32): i32 {
  return a + b;
}
