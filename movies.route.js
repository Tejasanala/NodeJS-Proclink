import express from "express";

import {
  GetmovieCtr,
  GetMovieByIdCtr,
  DeleteMovieByIdCtr,
  createMovieByIdCtr,
  UpdateMovieByIdCtr,
} from "./controllers/movies.controller.js";

const router = express.Router();

router.get("/", GetmovieCtr);

router.get("/:id", GetMovieByIdCtr);

//delete method
router.delete("/:id", DeleteMovieByIdCtr);

//add method

//body -> json | Middleware - express.json() -it tells the express that consider my body as Json()
//Convert your body into JSON
router.post(
  "/",
  express.json(),

  createMovieByIdCtr
);

//put method
router.put("/:id", UpdateMovieByIdCtr);

export default router;
