class ImplementArray {
	constructor() {
		this.data = {}
		this.length = 0
	}

	push(item) {
		this.data[this.length] = item
		this.length++
		return this.length
	}

	pop() {
		const lastItem = this.data[length - 1]
		delete this.data[length - 1]
		this.length--
		return { deleted: lastItem, length: this.length }
	}

	printArray() {
		Object.values(this.data).forEach((item) => console.log(item))
	}

	delete(index) {
		if (index < this.length) {
			const itemToDelete = this.data[index]
			for (let i = index; i < this.length - 1; i++) {
				this.data[i] = this.data[i + 1]
			}
			delete this.data[this.length - 1]
			this.length--
			return { deleted: itemToDelete, length: this.length }
		} else {
			throw new Error('Index out of range')
		}
	}

	insertAt(index, itemToInsert) {
		if (index <= this.length) {
			this.length++
			for (let i = this.length - 1; i > index; i--) {
				this.data[i] = this.data[i - 1]
			}
			this.data[index] = itemToInsert
		} else {
			console.log('Index out of range')
		}
	}
}

const newArray = new ImplementArray()
newArray.push('hi')
newArray.push(',')
newArray.push('my')
newArray.insertAt(3, 'name')
newArray.delete(1)
console.log(newArray)
newArray.delete(3)
console.log(newArray)
