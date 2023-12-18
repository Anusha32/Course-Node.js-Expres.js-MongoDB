const fs = require('fs');
const http = require('http');
const url = require('url');


////////////////////////////////////
// FILES
// Blocking, synchronous way
// const text = fs.readFileSync('./starter/txt/input.txt', 'utf-8');
// console.log(text);

// const textOut = `This is what we know about the avocado: ${text}.\n Created on ${Date.now()}`;
// fs.writeFileSync('./starter/txt/output.txt', textOut);

// console.log('file written');

// Blocking, asynchronous way
// const read = fs.readFile('./starter/txt/start.txt', 'utf-8', (err, data1) => {
//     if (err) return console.log('ERORRRRRRR');;
//     fs.readFile(`./starter/txt/${data1}.txt`, 'utf-8', (err, data2) => {
//         console.log(data2);
//         fs.readFile('./starter/txt/append.txt', 'utf-8', (err, data3) => {
//             console.log(data3);

//             fs.writeFile('./starter/txt/final.txt', `${data2}\n${data3}`, 'utf-8', err =>{
//                 console.log('File written :P');
//             })
//         });
//     });
// });   

// console.log('will read file');



///////////////////////////////////////
// SERVER

const server = http.createServer((req, res) => {
    const pathName  = req.url;

    if (pathName === '/overview' || pathName === '/') {
        res.end('This is the Overivew');
    } else if (pathName === '/product'){
        res.end('This is the Productt');
    } else if (pathName === '/api'){
        fs.readFile('./starter/dev-data/data.json')
        res.end('API');
    } else {
        res.writeHead(404, {
            'Content-Type': 'text/html',
            'my-header': 'xyz'
        });
        res.end('Page not Found!!'); 
    }
});

server.listen(8000, '127.0.0.1', () => {
    console.log('Listening to requests on port 8000');
});