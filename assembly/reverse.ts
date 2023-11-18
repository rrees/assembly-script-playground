
export function reverseString(s: String): String {
	let rs = "";
	for (let i=s.length - 1; i >= 0; i--) {
		rs = rs + s.at(i);
	}
	return rs;
}