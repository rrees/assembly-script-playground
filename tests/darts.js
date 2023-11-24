import assert from "assert";
import { score } from "../build/debug.js";


assert.strictEqual(score(11, -11), 0);
assert.strictEqual(score(0.5, 0.5), 10);
assert.strictEqual(score(3, -2), 5);
assert.strictEqual(score(6, -6), 1);
assert.strictEqual(score(-9, 9), 0);
assert.strictEqual(score(0.7, 0.7), 10);

console.log("ok");