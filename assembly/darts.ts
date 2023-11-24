
export function score(x: f32, y: f32): i32 {
	const distanceFromCentre = Math.sqrt(Math.pow(Math.abs(x), 2) + Math.pow(Math.abs(y), 2));

	if (distanceFromCentre <= 1) {
		return 10;
	}

	if (distanceFromCentre <= 5) {
		return 5;
	}

	if (distanceFromCentre <= 10) {
		return 1;
	}
	
	return 0;
}