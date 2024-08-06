import express from "express";
import { v4 as uuidv4 } from "uuid";

const router = express.Router();

router.get("/movies", function (request, response) {
  //we can also write html codes in send .. it can render the file
  response.send(movies);
});

router.get("/movies/:id", function (request, response) {
  //we can also write html codes in send .. it can render the file
  const { id } = request.params;
  //   console.log(id);

  const res = movies.find((findd) => findd.id == id);
  if (res) {
    response.send(res);
  } else {
    response.status(404).send({ msg: "Movie not found" });
  }
});

//delete method
router.delete("/movies/:id", function (request, response) {
  //we can also write html codes in send .. it can render the file
  const { id } = request.params;
  console.log(id);

  const res = movies.filter((findd) => findd.id != id);
  if (res) {
    response.send({ msg: "Movie deleted successfully", data: res });
  } else {
    response.send({ msg: "Movie not found" });
  }
});

//add method

//body -> json | Middleware - express.json() -it tells the express that consider my body as Json()
//Convert your body into JSON
router.post("/movies", express.json(), function (request, response) {
  const data = request.body;
  console.log(data);

  data.id = uuidv4();
  movies.push(data); // to get the id
  response.send({ msg: "Movie added Successfully." });
  if (res) {
    response.send(res);
  } else {
    response.status(404).send({ msg: "Movie not found" });
  }
});

//put method
router.put("/movies/:id", function (request, response) {
  const { id } = request.params;
  //   console.log(id);
  const data = request.body;
  const movieIdx = movies.findIndex((mv) => mv.id == id);

  if (movieIdx >= 0) {
    movies[movieIdx] = { ...movies[movieIdx], ...data };
    response.send(movies[movieIdx]);
  } else {
    response.status(404).send({ msg: "Movie not found" });
  }
});

export default router;
