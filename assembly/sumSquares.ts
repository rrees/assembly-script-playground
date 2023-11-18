
export function squareOfSum(max: i32): i32 {
	let n = 0;
	for (let i = max; i > 0; i--) {
		n += i;
	}
	return n * n;
}

export function sumOfSquares(max: i32): i32 {
	let sum = 0;

	for (let i = max; i > 0; i--) {
		sum += i * i;
	}
	return sum;
}

export function difference(max: i32): i32 {
	return squareOfSum(max) - sumOfSquares(max);
}