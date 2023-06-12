const data = require("../models/fakeData");

module.exports = class UserService {
  static getUser = (name) => {
    const user = data.find((user) => user.name === name);

    if (user) {
      user.counter += 1;
      return user;
    } else {
      return null;
    }
  };

  static getUsers = () => {
    data.map((user) => (user.counter += 1));
    return data;
  };
};
