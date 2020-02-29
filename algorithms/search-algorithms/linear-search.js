const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');

    function foo (arr, x) {
      if (!arr) return -1;

       for (i=0; i < arr.length; i++) {
           if(arr[i] === x) {
               return i
           }
       }
       return -1;
    }
    res.end('hello');
  });
  
  server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });