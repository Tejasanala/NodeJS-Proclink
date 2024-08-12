import { Movies } from "../entities/movies.entity.js";

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

export {
  UpdateMovieById,
  createMovieById,
  DeleteMovieById,
  GetMovieById,
  Getmovie,
};
