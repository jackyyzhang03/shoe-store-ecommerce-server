const fs = require("fs");
const path = require("path");

const authenticateUser = async (username, password) => {
  const users = JSON.parse(
    await fs.promises.readFile(path.join(__dirname, "../users.json"))
  );

  user = users.users.find((user) => user.username == username);
  if (user === undefined) {
    return false;
  }
  if (user.password === password) {
    return true;
  }
  return false;
};

module.exports = {
  authenticateUser: authenticateUser,
};
