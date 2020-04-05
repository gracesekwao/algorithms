function count(arr) {
   const result = {};

    for(let i = 0; i < arr.length; ++i) {
        if(!result[arr[i]]) {
            result[arr[i]] = 0;
        }   
        ++result[arr[i]];
    }

    const values = Object.keys(result).map(function(key) {
        return result[key];
    });
    const maxValue = Math.max(...values);
    return Object.keys(result).find(key => result[key] === maxValue)
}


console.log(count([1,2,3,1,1,2,1,2,3,2,1]));