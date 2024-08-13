// const express = require("express"); //type:common js syntax i.e old syntax
// const cors = require("cors");
// //we are importing a third party package from node_modules

// //calling all the express() methods into app
import express from "express";
import cors from "cors";
import { v4 as uuidv4 } from "uuid";

import moviesRouter from "./movies.route.js";
import userRouter from "./users.route.js";

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());
//express is converting our array of objects into JSON

app.get("/", function (request, response) {
  //we can also write html codes in send .. it can render the file
  response.send("🙋‍♂️, 🌏 🎊✨🤩");
});

app.use("/movies", moviesRouter);

app.use("/users", userRouter);

//we are saying to express that which port number it has to listen to
app.listen(PORT, () => console.log(`The server started in: ${PORT} ✨✨`));

//TO cut the server ctrl + c
