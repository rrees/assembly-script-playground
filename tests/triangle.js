import assert from "assert";
import { isEquilateral, triangleInequality } from "../build/debug.js";


assert.strictEqual(isEquilateral(2, 2, 2), 1);
assert.strictEqual(isEquilateral(0, 0, 0), 0);
assert.strictEqual(isEquilateral(2, 2, 3), 0);

assert.strictEqual(triangleInequality(4, 3, 4), 1);

console.log("OK");