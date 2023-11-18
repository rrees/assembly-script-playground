import assert from "assert";
import { steps } from "../build/debug.js";


assert.strictEqual(steps(1), 0);
assert.strictEqual(steps(12), 9);

console.log("ok");
