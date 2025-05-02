/**
 * 
 * Input: "AAAHHIBC"
Output: 5

👉 The longest substring with at most 2 distinct characters is: "AAAHH" (5 characters long).} s 
 * @returns 
 */

function lengthOfLongestSubstringTwoDistinct(s) {
	let left = 0
	let maxLen = 0
	const map = new Map()

	for (let right = 0; right < s.length; right++) {
		const char = s[right]

		// Add the current character to the map or update its count
		map.set(char, (map.get(char) || 0) + 1)

		// Shrink window if more than 2 distinct characters
		while (map.size > 2) {
			const leftChar = s[left]
			map.set(leftChar, map.get(leftChar) - 1)
			if (map.get(leftChar) === 0) {
				map.delete(leftChar)
			}
			left++ // Move the window's left side
		}

		// Update max length
		maxLen = Math.max(maxLen, right - left + 1)
	}

	return maxLen
}
