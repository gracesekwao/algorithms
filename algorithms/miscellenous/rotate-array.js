function rotateArray(arr, order) {
    if (!arr.length || !arr) {
        throw 'array cannot be empty';
    }

    if(!order || order < 0) {
        throw 'invalid order value';
    }

    for (let i = 0; i < order; i++) {
		for (let j = arr.length - 1; j > 0; j--) {
			let temp = arr[j];
			arr[j] = arr[j - 1];
			arr[j - 1] = temp;
        }
    }
    
    return arr;
}


console.log(rotateArray([2,3,4,5,6], 1));