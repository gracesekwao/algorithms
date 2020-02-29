const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');

    function fooInner (arr, start, end, x) {
        if (!arr) return -1;
        if (start < end) {
            const midIndex = (start + end) / 2;
            if(midIndex === x) {
                return midIndex;
            } else if(midI)
        
        }
    

        return -1;
    }

    function foo(array, x) {
        return fooInner(array, 0, array.length, x);
    }

    console.log(foo([2,5,8,12,16,23,38,56,72,91], 10, 23));
    res.end('hello');
  });
  
  server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });