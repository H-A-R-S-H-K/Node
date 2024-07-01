const fs = require('fs');
//Read File
// fs.readFileSync('./file.txt', 'utf-8', (err, data) => {
//     if (err) {
//         console.error(err);
//         return;
//     }
//     console.log(data);
// });

//Append Text
// let newText = " Game Off";
// fs.appendFileSync('./file.txt', newText, (err, data) => {
//     if (err) {
//         console.error(err);
//         return;
//     }
// })

//Make Directory
// fs.mkdir('dir1', (err) => {
//     if (err)
//         console.error(err);
//     console.log('dir formed');
// })

//Remove Directory
// fs.rmdir('dir1', () => {
//     console.log('dir removed');
// })

//Rename File
// fs.rename('file.txt', 'newFile.txt', () => {
//     console.log('File name changed');
// })

// const p = "/Users/harshkumar/Desktop/node/newFile.txt";
// const path = require("path");

// const dirname = path.dirname(p);
// const extension = path.extname(p);

// console.log(dirname);
// console.log(extension);


//Get current dir and file path
// console.log("Directory = " + __dirname + " Filename = " + __filename);

//copy file from src to dest

// const source = __dirname + "/copy.txt";
// const destination = __dirname + "/newFile.txt";
// fs.copyFileSync(source, destination);
// fs.unlinkSync('newFile.txt');

const http = require('http');

const server = http.createServer((req, res) => {
    res.setHeader('Content-type', 'text/html');
    if (req.url === '/login') 
        res.write('<html><head><title>node js</title></head><body><h1>Login</h1></body></html');

    else
        res.write('<html><head><title>node js</title></head><body><h1>Hello</h1></body></html');
    res.end();
})


const port = 8080;
const host = 'localhost';

server.listen(port, host, () => {
    console.log(`Listening on https://${host}:${port}`)
})

