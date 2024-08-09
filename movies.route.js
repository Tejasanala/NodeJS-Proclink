import express from "express";
import { v4 as uuidv4 } from "uuid";
import { Movies } from "./entities/movies.entity.js";

const router = express.Router();

router.get("/", async function (request, response) {
  //we can also write html codes in send .. it can render the file
  const allMovies = await Movies.scan.go();
  response.send(allMovies.data);
});

router.get("/:id", async function (request, response) {
  //we can also write html codes in send .. it can render the file
  const { id } = request.params;
  //   console.log(id);

  // const res = movies.find((findd) => findd.id == id);
  const data = await Movies.query.primary({ movieId: `${id}` }).go();
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
  const data = await Movies.delete({
    movieId: id,
  }).go();
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

  await Movies.create(addMovie).go();

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

  const existingData = await Movies.get({ movieId: id }).go();
  if (existingData.data) {
    const res = await Movies.put({ ...existingData.data, ...updatedData }).go();
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

// {
//   "name": "RRR",
//   "poster":
//     "https://englishtribuneimages.blob.core.windows.net/gallary-content/2021/6/Desk/2021_6$largeimg_977224513.JPG",
//   "rating": 8.8,
//   "summary":
//     "RRR is an upcoming Indian Telugu-language period action drama film directed by S. S. Rajamouli, and produced by D. V. V. Danayya of DVV Entertainments.",
//   "trailer": "https://www.youtube.com/embed/f_vbAtFSEc0"
// }
