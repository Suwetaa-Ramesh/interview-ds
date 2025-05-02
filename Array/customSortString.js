// You are given two strings order and s. Sort the characters of s so that they appear
// in the order defined by order. Characters not in order can go anywhere.

// Input: order = "cba", s = "abcd"
// Output: "cbad"

function customSortString(order, s) {
	const count = new Map()
	for (let char of s) {
		count.set(char, (count.get(char) || 0) + 1)
	}

	let result = ''
	for (let char of order) {
		if (count.has(char)) {
			result += char.repeat(count.get(char))
			count.delete(char)
		}
	}
	// Add remaining chars
	for (let [char, freq] of count) {
		result += char.repeat(freq)
	}
	return result
}
