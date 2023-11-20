import assert from "assert";
import { isLeap } from "../build/debug.js";


assert.strictEqual(isLeap(1996), 1, "1996 should be a leap year");
assert.strictEqual(isLeap(1997), 0);
assert.strictEqual(isLeap(1900), 0);
assert.strictEqual(isLeap(2000), 1, "2000 should be a leap year");

console.log("ok");
