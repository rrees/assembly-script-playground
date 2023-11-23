import assert from "assert";
import { score } from "../build/debug.js";


assert.strictEqual(score(11, -11), 0);

console.log("ok");