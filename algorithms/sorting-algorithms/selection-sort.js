  function selectionSort (arr) {
    if (!arr || !arr.length) {
      throw 'array can not be empty';
    };
    try {
      for (let i = 0; i < arr.length; i++) {
        let min = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[min] > arr[j]) {
                min = j;
            }
        }
        if (min !== i) {
            let tmp = arr[i];
            arr[i] = arr[min];
            arr[min] = tmp;
        }
    }
      return arr;

    } catch(e) {
      console.log(e);
    }
  
  }
