import { Users } from "../entities/users.entity.js";

function createUser(addUser) {
  return Users.create(addUser).go();
}

async function getUserByName(username) {
  return await Users.get({ username }).go();
}
async function getUserBypass(password) {
  return await Users.get({ password }).go();
}

export { createUser, getUserByName, getUserBypass };
