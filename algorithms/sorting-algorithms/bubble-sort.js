function bubbleSort (arr) {
    if (!arr || !arr.length) {
      throw 'array can not be empty';
    };

    try {
        for (let i = 0; i < arr.length; i++) {
            for (let j = 0; j < arr.length; j++) {
                if (arr[j] > arr[j + 1]) {
                    let tmp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = tmp;
                }
            }
        }

       return arr;
    } catch(e) {
      console.log(e);
    }

  }

  console.log(bubbleSort([2,7,1,9,4]));

