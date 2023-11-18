import assert from "assert";
import { squareOfSum, sumOfSquares, difference } from "../build/debug.js";


assert.strictEqual(squareOfSum(10), 3025);
assert.strictEqual(sumOfSquares(10), 385);
assert.strictEqual(difference(10), 2640);

console.log("ok");