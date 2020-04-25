function fibonacci(n) {
    let item1 = 0;
    let item2 = 1;
    let item3;
    
    if(n === item1) {
        return 0;
    }
 
    for (let i = 2; i <= n; i++) 
    { 
        item3 = item1 + item2;
        item1 = item2;
        item2 = item3
    } 
    return item3; 
 }
 
 console.log(fibonacci(4));
 