function foo (arr, x) {
    if (!arr.length || !arr) {
        throw 'array cannot be empty';
    }

    let start = 0;
    let end = arr.length;

    try {
        while(start <= end) {
            let midIndex = Math.floor(start + ((end - start)/2));
    
            if(arr[midIndex] === x){
                return midIndex;
            } else if(arr[midIndex] > x) {
                end = midIndex - 1;
            } else {
                start = midIndex + 1;
            }
        }
    
        return `element ${x} not found`;
    } catch(e) {
        console.log(e);
    }
  
}

console.log(foo([], 3))

