
export function steps(param: i32): i32 {
	return steps_internal(param, 0);
}

function steps_internal(param: i32, currentSteps: i32): i32 {
	if (param < 1) {
		return -1;
	}
	
	if(param === 1) {
		return currentSteps;
	}

	if(param % 2 === 0) {
		return steps_internal(param / 2, currentSteps + 1);
	}


	return steps_internal(1 + (3 * param), currentSteps + 1);

}