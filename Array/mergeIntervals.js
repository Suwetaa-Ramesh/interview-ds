/**
 * 
 * Given an array of intervals where intervals[i] = [starti, endi], m
 * erge all overlapping intervals, and return an array of the non-overlapping intervals 
 * that cover all the intervals in the input.


Example 1:

Input: intervals = [[1,3],[2,8],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].
Example 2:

Input: intervals = [[1,4],[4,5]]
Output: [[1,5]]
Explanation: Intervals [1,4] and [4,5] are considered overlapping.

 */

const mergeIntervals = (intervals) => {
	if (!intervals.length) return []

	// 1️⃣ Sort intervals by the start time
	intervals.sort((a, b) => a[0] - b[0])

	const result = [intervals[0]] // start with the first interval

	for (let i = 1; i < intervals.length; i++) {
		let lastInterval = result[result.length - 1] // the last merged interval
		let current = intervals[i]

		if (current[0] <= lastInterval[1]) {
			// 🛠️ Overlapping: merge by updating end time
			lastInterval[1] = Math.max(lastInterval[1], current[1])
		} else {
			// ✅ No overlap: push to result
			result.push(current)
		}
	}

	return result
}
console.log(
	mergeIntervals([
		[1, 3],
		[2, 6],
		[8, 10],
		[15, 18],
	])
)

console.log(
	mergeIntervals([
		[1, 4],
		[4, 5],
	])
)

console.log(
	mergeIntervals([
		[1, 4],
		[5, 6],
	])
)
