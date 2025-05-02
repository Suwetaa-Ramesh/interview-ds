function maxSubArray(arr) {
	if (arr.length === 0) return 0

	let maxSoFar = arr[0] // To store the max sum found
	let currentSum = arr[0] // To store the current subarray sum

	for (let i = 1; i < arr.length; i++) {
		// Decide whether to extend the current subarray or start new
		currentSum = Math.max(arr[i], currentSum + arr[i])

		// Update max if needed
		maxSoFar = Math.max(maxSoFar, currentSum)
	}

	return maxSoFar
}
