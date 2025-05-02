/**
 *  Given an integer n, return a string array answer (1-indexed) where:

answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
answer[i] == "Fizz" if i is divisible by 3.
answer[i] == "Buzz" if i is divisible by 5.
answer[i] == i (as a string) if none of the above conditions are true.
 

Example 1:

Input: n = 3
Output: ["1","2","Fizz"]
Example 2:

Input: n = 5
Output: ["1","2","Fizz","4","Buzz"]
Example 3:

Input: n = 15
Output: ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]
**/

const fizzBuzz = (n) => {
	const result = []
	const rules = { 3: 'Fizz', 5: 'Buzz' }

	for (let i = 1; i <= n; i++) {
		let str = ''
		for (let key in rules) {
			if (i % key === 0) str += rules[key]
		}
		result.push(str || i.toString())
	}

	return result
}

// console.log(fizzBuzz(3))
// console.log(fizzBuzz(5))
// console.log(fizzBuzz(15))

// console.log('hello' || 'world')
// console.log('foo' && 'bar')

console.log(10 + '20')
