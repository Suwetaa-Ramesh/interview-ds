function groupAnagrams(strs) {
	const map = new Map()

	for (let str of strs) {
		const sorted = str.split('').sort().join('')
		console.log({ str, sorted })
		if (!map.has(sorted)) {
			map.set(sorted, [])
		}
		map.get(sorted).push(str)
		console.log({ map })
	}

	return Array.from(map.values())
}

console.log(groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']))
