const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');

    function foo (arr, arrLength, x) {
        if(arrLength > 1) {
            let midIndex = Math.floor((arrLength - 1) / 2);
            if (arr[midIndex] === x) {
                return midIndex;
          } else if(x > arr[midIndex]) {
              foo(arr.slice(midIndex + 1), arr.slice(midIndex + 1).length,  x)
  
          } else if(x < arr[midIndex]) {
              foo(arr.slice(0, midIndex + 1), arr.slice(0, midIndex + 1).length, x)
          }
        }

        return -1;
    }

    console.log(foo([2,5,8,12,16,23,38,56,72,91], 10, 23));
    res.end('hello');
  });
  
  server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });