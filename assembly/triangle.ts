
export function isEquilateral(a: f32, b: f32, c: f32): i32 {
	if(a === b && b === c && a !== 0) {
		return 1;
	}

	return 0;
}

export function triangleInequality(a: f32, b: f32, c: f32): i32 {
	if (a === 0 || b === 0 || c === 0) {
		return 0;
	}

	if(a + b >= c && b + c >= a && a + c >= b) {
		return 1
	}

	return 0;
}