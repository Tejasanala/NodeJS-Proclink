import { Users } from "../entities/users.entity.js";

function createUser(addUser) {
  return Users.create(addUser).go();
}

export { createUser };
