import { createUser } from "../service/users.service.js";
import bcrypt from "bcrypt";

async function createUserCtr(request, response) {
  const data = request.body;

  // const password = "Password@123";

  const NO_OF_ROUNDS = 10;
  const salt = await bcrypt.genSalt(NO_OF_ROUNDS);
  const hashedPassword = await bcrypt.hash(data.password, salt);
  console.log(salt);
  console.log(hashedPassword);

  await createUser(data);

  response.send(data);

  // response.send({ msg: "Movie added Successfully." });
  // if (res) {
  //   response.send(res);
  // } else {
  //   response.status(404).send({ msg: "Movie not found" });
  // }
}

export { createUserCtr };
