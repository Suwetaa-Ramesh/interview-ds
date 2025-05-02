/**
 * You are given a sorted array of integers where exactly one number appears more than once.
 * All other numbers are unique.
 *
 * Write a function to find the duplicate number in the most efficient way possible.
 *
 * Example:
 *   Input:  [1, 2, 3, 4, 4, 5, 6]
 *   Output: 4
 *
 * Constraints:
 * - The input array is sorted in ascending order.
 * - There is exactly one duplicate.
 * - The array may be large.
 *
 * Follow-up:
 * - Can you solve it using less than O(n) time?
 * - What is the time and space complexity of your solution?
 *
 * @param {number[]} arr - Sorted array of integers
 * @return {number} - The duplicated number
 */
const findDuplicate = (arr) => {
	for (i = 0; i < arr.length; i++) {
		if (arr[i] === arr[i + 1]) {
			return arr[i]
		}
	}
}

console.log(findDuplicate([-5, -4, -3, -2, -2, -1]))
