function fibonacci(n) {
   const fibArr = [n + 2];
   fibArr[0] = 0;
   fibArr[1] = 1;

   for (let i = 2; i <= n; i++) 
   { 
       fibArr[i] = fibArr[i-1] + fibArr[i-2]; 
   } 
   return fibArr[n]; 
}

console.log(fibonacci(4));
