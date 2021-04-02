// const os = require('os');

// // info about current user
// const user = os.userInfo();
// console.log(user);

// // method returns the system uptime in seconds
// console.log(`The system uptime is ${os.uptime()} seconds`);

// const currentOs = {
//   name: os.type(),
//   release: os.release(),
//   totalMem: os.totalmem(),
//   freeMem: os.freemem(),
// };

// console.log(currentOs);

// const path = require('path');

// console.log(path.sep);

// const filePath = path.join('./content', 'subfolder', 'test.txt');

// const base = path.basename(filePath);
// console.log(base);

// const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt');
// console.log(absolute);

// const fs = require('fs');

// const first = fs.readFileSync('./content/first.txt', 'utf8');
// const second = fs.readFileSync('./content/second.txt', 'utf8');

// fs.writeFileSync(
//   './content/third.txt',
//   `Here is the result: ${first}, ${second}`
// );

// fs.writeFileSync('./content/third.txt', 'Hello World');

// fs.writeFile('./content/fourth.txt', 'This is a test file', (error) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log('Created file successfully!');
//   }
// });

// console.log('start');
// fs.readFile('./content/fourth.txt', 'utf8', (error, file) => {
//   if (error) {
//     console.log(error);
//     return;
//   }
//   const first = file;
//   fs.readFile('./content/second.txt', 'utf8', (err, file) => {
//     if (err) {
//       console.log(error);
//       return;
//     }

//     const second = file;
//     fs.writeFile('./content/fifth.txt', second, (error) => {
//       if (error) {
//         console.log(error);
//       } else {
//         console.log('Created fifth.txt successfully!');
//       }
//     });
//   });
// });
// console.log('finish');

// console.log('Start');
// const first = fs.readFileSync('./content/first.txt', 'utf8');
// console.log(first);
// console.log('Done');

// const http = require('http');

// const server = http.createServer((req, res) => {
//   if (req.url === '/') {
//     res.write('Welcome to our home page');
//   } else if (req.url === '/about') {
//     res.write('Welcome to about page');
//   } else {
//     res.write(`
//          <h1>Opps</h1>
//          <p>Sorry, we can not find the page you are looking for!</p>
//           <a href='/'>back home</a>
//      `);
//   }

//   // if (req.url === '/about') {
//   //   res.write('Welcome to our about page!');
//   //   res.end();
//   // }

//   res.end();
// });

// server.listen(5000);

const _ = require('lodash');

const items = [1, [2, [3, [4]]]];

console.log(_.flattenDepth(items, 3)); // [1, 2, 3, [4]]
