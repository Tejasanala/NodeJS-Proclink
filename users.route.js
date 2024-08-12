import express from "express";

import { createUserCtr } from "./controllers/users.controller.js";

const router = express.Router();

router.post(
  "/signup",
  express.json(),

  createUserCtr
);

//put method
//router.put("/:id", UpdateMovieByIdCtr);

export default router;
