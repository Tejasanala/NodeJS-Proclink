const os = require("os");
console.log(os.freemem()); //default it is in Bytes .It is the free memory in RAM
const remaining = os.freemem() / 1024 ** 3;
console.log(remaining.toFixed(1) + " GB");
console.log(os.totalmem()); //Total memory in RAM
const total = os.totalmem() / 1024 ** 3;
console.log(total.toFixed(1) + " GB");

const percentage = (remaining * 100) / total;
console.log("The used amount of data is : " + percentage.toFixed(2) + "%"); //amount of percentage used

console.log(os.version());
console.log(os.cpus());

// Since os is inbuilt method we can use them directly
