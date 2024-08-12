import {
  UpdateMovieById,
  createMovieById,
  DeleteMovieById,
  GetMovieById,
  Getmovie,
} from "../service/movies.service.js";

async function GetmovieCtr(request, response) {
  //we can also write html codes in send .. it can render the file
  const allMovies = await Getmovie();
  response.send(allMovies.data);
}

async function GetMovieByIdCtr(request, response) {
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
}

async function DeleteMovieByIdCtr(request, response) {
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
}

async function createMovieByIdCtr(request, response) {
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
}

async function UpdateMovieByIdCtr(request, response) {
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
}

export {
  GetmovieCtr,
  GetMovieByIdCtr,
  DeleteMovieByIdCtr,
  createMovieByIdCtr,
  UpdateMovieByIdCtr,
};
