const sum = (a, b) => a + b; // +a + +b(explicit cohersion)

const [, , a, b] = process.argv;
//In process.argv evertthing is a string
console.log(process.argv);
console.log(parseInt(process.argv[2]) + parseInt(process.argv[3]));
