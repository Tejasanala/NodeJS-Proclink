console.log("Hello 👻");

const double = (num) => num * 2;
//console.log(double(10));

//conole.log(document); ❌only in browser
//conole.log(window); ❌only in browser

//console.log(globalThis); ✅ only in node js

console.log(process.argv);
/*
node sum.js 100
Hello 
20
[ 'C:\\Program Files\\nodejs\\node.exe', 'D:\\NodeJS\\sum.js', '100' ]
 */

//here we will use the concept of destructuring.

const [, , num] = process.argv;
console.log(double(process.argv[2]));
