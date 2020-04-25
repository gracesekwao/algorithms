function fooInner (arr, start, end, x) {
    if (!arr.length || !arr ) {
        throw 'array cannot be empty';
    }

    if (start < 0) {
        throw 'start cannot be less than zero';
    }

    if(end > arr.length) {
        throw  'end cannot be greater than the array length';
    }

    try {
        if (start <= end) {
            const midIndex = Math.floor((start + (end-start)/2));
  
            if(arr[midIndex] === x) {
                return midIndex;
            } else if(arr[midIndex] < x) {
                return fooInner(arr, midIndex + 1, end, x);
    
            } else if(arr[midIndex] > x) {
                return fooInner(arr, start, midIndex - 1, x);
            }
        
        }
    
        return `element ${x} not found`;

    } catch(e) {
        console.log(e);
    }

}

function foo(array, x) {
    return fooInner(array, 0, array.length - 1, x);
}

