// const fs = require("fs");
// const quote = "Stay hungry , Stay Foolish";
// for (let i = 0; i < 10; i++) {
//   fs.writeFile(`./Backup/text-${i}.html`, quote, (err) => {
//     console.log("Completed successfully");
//   });
// }

//we need to create a limit for sending no of files.
const fs = require("fs");

const [, , a] = process.argv;
const quote = "Stay hungry , Stay Foolish";
for (let i = 0; i < process.argv[2]; i++) {
  fs.writeFile(`./folder30/text-${i}.html`, quote, (err) => {
    console.log(`Completed successfully - text-${i}.html`);
  });
}

fs.readFile("./fun.html", "utf-8", (err, data) => {
  if (err) {
    console.log("Oops", err);
  } else {
    console.log(data);
  }
});

//data = "Good morning";
var x = fs.appendFile("./fun.html", " \n Good Morning ", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});

//Read the content and write the file.

// quote = "Life is short..Be as much as cringe as You can";

// var e = fs.readFile("./fun.html", "utf-8", (err, data) => {
//   console.log(data);

//   fs.writeFile("./fun.html", quote, "");
// });

//deleting a file
fs.unlink("./fun2.html", (err) => {
  console.log("Deleted");
});
