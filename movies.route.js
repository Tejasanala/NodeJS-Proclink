import express from "express";
import { v4 as uuidv4 } from "uuid";
import { Movies } from "./entities/movies.entity.js";

const router = express.Router();

router.get("/", async function (request, response) {
  //we can also write html codes in send .. it can render the file
  const allMovies = await Getmovie();
  response.send(allMovies.data);
});

router.get("/:id", async function (request, response) {
  //we can also write html codes in send .. it can render the file
  const { id } = request.params;
  //   console.log(id);

  // const res = movies.find((findd) => findd.id == id);
  const data = await GetMovieById(id);
  response.send(data);
  // if (res) {
  //   response.send(res);
  // } else {
  //   response.status(404).send({ msg: "Movie not found" });
  // }
});

//delete method
router.delete("/:id", async function (request, response) {
  //we can also write html codes in send .. it can render the file
  const { id } = request.params;

  // const res = movies.filter((findd) => findd.id != id);
  // const data = await Movies.query.primary({ movieId: `${id}` }).go();
  const data = await DeleteMovieById(id);
  console.log(data.data);
  if (data) {
    response.send({ msg: "Movie deleted successfully", data: `${data.data}` });
  } else {
    response.send({ msg: "Movie not found" });
  }
});

//add method

//body -> json | Middleware - express.json() -it tells the express that consider my body as Json()
//Convert your body into JSON
router.post("/", express.json(), async function (request, response) {
  const data = request.body;

  const addMovie = {
    ...data,
    movieId: uuidv4(),
  };

  await createMovieById(addMovie);

  response.send(addMovie);

  // response.send({ msg: "Movie added Successfully." });
  // if (res) {
  //   response.send(res);
  // } else {
  //   response.status(404).send({ msg: "Movie not found" });
  // }
});

//put method
router.put("/:id", async function (request, response) {
  const { id } = request.params;
  //   console.log(id);
  const updatedData = request.body;

  const existingData = await GetMovieById();
  if (existingData.data) {
    const res = await UpdateMovieById(existingData, updatedData);
    console.log(res.data);
    response.send(res.data);
  } else {
    response.status(404).send({ msg: "Movie not found" });
  }
  // const movieIdx = movies.findIndex((mv) => mv.id == id);

  // if (movieIdx >= 0) {
  //   movies[movieIdx] = { ...movies[movieIdx], ...data };
  //   response.send(movies[movieIdx]);
  // } else {
  //   response.status(404).send({ msg: "Movie not found" });
  // }
});

export default router;

function UpdateMovieById(existingData, updatedData) {
  return Movies.put({ ...existingData.data, ...updatedData }).go();
}

function createMovieById(addMovie) {
  return Movies.create(addMovie).go();
}

function DeleteMovieById(id) {
  return Movies.delete({
    movieId: id,
  }).go();
}

function GetMovieById(id) {
  return Movies.get({ movieId: id }).go();
}

function Getmovie() {
  return Movies.scan.go();
}
