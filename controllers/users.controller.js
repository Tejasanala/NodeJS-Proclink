import {
  createUser,
  getUserByName,
  getUserBypass,
} from "../service/users.service.js";
import bcrypt from "bcrypt";

const genHashpassword = async (password) => {
  const NO_OF_ROUNDS = 10;
  const salt = await bcrypt.genSalt(NO_OF_ROUNDS);
  const hashedPassword = await bcrypt.hash(password, salt);
  return hashedPassword;
};

async function createUserCtr(request, response) {
  const data = request.body;

  if (data.password.length < 8) {
    response.status(400).send({ msg: "Password is too short" });
    return;
  }
  const getUserByUname = await getUserByName(data.username);

  if (getUserByUname.data) {
    response.status(404).send({ msg: "user already exist" });
    return;
  }

  const hashpassword = await genHashpassword(data.password);

  try {
    await createUser({ username: data.username, password: hashpassword });

    response.send(data);
  } catch {
    response.status(404).send({ msg: "msg" });
  }
}
// ..........................................................

async function getUserCtr(request, response) {
  const data = request.body;
  console.log(data);

  const getUserByUname = await getUserByName(data.username);

  const getUserByPassword = await getUserBypass(data.password);

  if (!getUserByUname.data) {
    response.status(404).send({ msg: "Invalid credentials" });
    return;
  }
  const storedPassword = getUserByPassword.data.password;
  const providedPassword = data.password;

  const isPasswordCheck = await bcrypt.compare(
    storedPassword,
    providedPassword
  );
  console.log(isPasswordCheck);
  if (isPasswordCheck) {
    response.status(200).send({ msg: "Login Successful" });
    return;
  } else {
    response.status(400).send({ msg: "Invalid credentials" });
    return;
  }
}

export { createUserCtr, getUserCtr };
