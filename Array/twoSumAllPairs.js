const twoSumAll = (nums, target) => {
	const result = []
	const seen = new Set()
	const map = {}

	for (let i = 0; i < nums.length; i++) {
		const diff = target - nums[i]

		if (diff in map) {
			for (let j of map[diff]) {
				console.log({ j, map })
				const pair = [j, i].sort((a, b) => a - b).toString()
				if (!seen.has(pair)) {
					console.log({ seen })
					result.push([j, i])
					seen.add(pair)
				}
			}
		}

		if (!map[nums[i]]) {
			map[nums[i]] = []
		}
		map[nums[i]].push(i)
	}

	return result
}

console.log(twoSumAll([1, 2, 3, 2, 4], 5))
// Output: [ [1, 4], [2, 3] ] → nums[1]+nums[4] and nums[2]+nums[3] both = 5
