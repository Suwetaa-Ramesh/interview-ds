/**
 * 🧠 Problem:
 * You are given two sorted arrays of integers, `arr1` and `arr2`.
 * Write a function to merge them into a single sorted array.
 *
 * The result should also be a sorted array containing all elements from both input arrays.
 *
 * ❗️Constraints:
 * - Both input arrays are sorted in non-decreasing order
 * - Arrays can be of different lengths
 * - Arrays may contain duplicate values
 * - One or both arrays may be empty
 *
 * ✅ Your function should NOT use built-in sort methods.
 *
 * @param {number[]} arr1 - First sorted array
 * @param {number[]} arr2 - Second sorted array
 * @return {number[]} - Merged and sorted array
 *
 * 📘 Example 1 (Simple):
 *   Input: arr1 = [1, 3, 5], arr2 = [2, 4, 6]
 *   Output: [1, 2, 3, 4, 5, 6]
 *
 * 📘 Example 2 (With duplicates):
 *   Input: arr1 = [1, 2, 2], arr2 = [2, 3, 4]
 *   Output: [1, 2, 2, 2, 3, 4]
 *
 * 📘 Example 3 (Uneven lengths):
 *   Input: arr1 = [1], arr2 = [2, 3, 4, 5]
 *   Output: [1, 2, 3, 4, 5]
 *
 * 📘 Example 4 (One empty array):
 *   Input: arr1 = [], arr2 = [1, 2, 3]
 *   Output: [1, 2, 3]
 *
 * 📘 Example 5 (Both empty):
 *   Input: arr1 = [], arr2 = []
 *   Output: []
 */
function mergeSortedArrays(arr1, arr2) {
	const sortedArr = []
	let i = 0
	let j = 0
	while (i < arr1.length && j < arr2.length) {
		if (arr1[i] <= arr2[j]) {
			sortedArr.push(arr1[i])
			i++
		} else {
			sortedArr.push(arr2[j])
			j++
		}
	}
	while (i < arr1.length) {
		sortedArr.push(arr1[i++])
	}

	while (j < arr2.length) {
		sortedArr.push(arr2[j++])
	}

	return sortedArr
}

console.log(mergeSortedArrays([1, 3, 5], [2, 4, 6]))
console.log(mergeSortedArrays([1, 2, 2], [2, 3, 4]))
console.log(mergeSortedArrays([1], [2, 3, 4, 5]))
console.log(mergeSortedArrays([], [1, 2, 3]))
console.log(mergeSortedArrays([], []))
