function isHappy(n) {
	const seen = new Set()

	while (n !== 1 && !seen.has(n)) {
		seen.add(n)
		n = sumOfSquares(n)
	}

	return n === 1
}

function sumOfSquares(num) {
	return num
		.toString()
		.split('')
		.reduce((sum, digit) => sum + Math.pow(Number(digit), 2), 0)
}

console.log(isHappy(19))
console.log(isHappy(2))
