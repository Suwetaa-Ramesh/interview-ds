const reverseString = (str) => {
	if (!str.length > 2 || !str) {
		return 'Reverse cannot be performed for this'
	}
	const strArray = []
	for (let i = str.length - 1; i >= 0; i--) {
		strArray.push(str[i])
	}

	return strArray.join('')
}

const reverseStringUsingBuiltInFn = (str) => str.split('').reverse().join('')

console.log(reverseString('Hi My name is Suwetaa'))
console.log(reverseStringUsingBuiltInFn('Hi My name is Suwetaa'))
