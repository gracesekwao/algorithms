  function insertionSort (arr) {
    if (!arr || !arr.length) {
      throw 'array can not be empty';
    };

    try {
      for (i=1; i < arr.length; i++) {
        let key = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = key;
       }

       return arr;
    } catch(e) {
      console.log(e);
    }

  }


