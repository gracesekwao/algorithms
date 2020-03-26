  function foo (arr, x) {
      if (!arr || !arr.length) {
          throw 'array can not be empty';
      };


      try {
        for (i=0; i < arr.length; i++) {
            if(arr[i] === x) {
                return i
            }
        }
        return `element ${x} not found`;
      } catch(e) {
          console.log(e);
      }
       
    }

