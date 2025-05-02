// return n th value of fibonocci series
// 0 1 1 2 3 5 8 13 21 ...

function fibonocci(n) {
	if(n< 2){
        return n
    }
	return fibonocci(n - 1) + fibonocci(n-2)
}

fibonocci(2) = 1
fibonocci(3) = 2
fibonocci(4) = 3
fibonocci(5) = 5
