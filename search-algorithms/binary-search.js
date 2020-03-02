const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');

    function fooInner (arr, start, end, x) {
        if (!arr) return -1;

        if (start <= end) {
            const midIndex = Math.floor((start + end) / 2);

            if(arr[midIndex] === x) {
                return midIndex;
            } else if(arr[midIndex] < x) {
                fooInner(arr, midIndex + 1, end, x);

            } else if(arr[midIndex] > x) {
                fooInner(arr, start, midIndex - 1, x);
            }
        
        }

        return -1;
    }

    function foo(array, x) {
        return fooInner(array, 0, array.length - 1, x);
    }
    res.end('hello');
  });
  
  server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });