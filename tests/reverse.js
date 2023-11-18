import assert from "assert";
import { reverseString } from "../build/debug.js";

assert.strictEqual(reverseString("hello"), "olleh");
console.log("ok");
