// Given a string s, sort it so that characters appear in descending order by frequency.

// Input: "tree"
// Output: "eetr" (or "eert")
function frequencySort(s) {
	const map = new Map()
	for (let char of s) {
		map.set(char, (map.get(char) || 0) + 1)
	}
	console.log([...map.entries()])
	console.log(map.entries())
	return [...map.entries()]
		.sort((a, b) => b[1] - a[1])
		.map(([char, freq]) => char.repeat(freq))
		.join('')
}

console.log(frequencySort('tree'))
