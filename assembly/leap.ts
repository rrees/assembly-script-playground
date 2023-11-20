export function isLeap(year: i32): i32 {
	if ((year % 4 == 0 && year % 100 != 0)
		|| (year % 4 == 0 && year % 400 == 0)) {
		return 1;
	}
	return 0;
}