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

  static createUser = (name, job) => {
    if (!name || !job) {
      return null;
    }

    const newUser = {
      id: data.length + 1,
      name: name,
      job: job,
      counter: 0,
    };

    data.push(newUser);

    return newUser;
  };

  static deleteUser = (name) => {
    const userToBeDeleted = data.find((user) => user.name === name);
    if (!userToBeDeleted) {
      return null;
    }

    data.forEach((user, i) => {
      if (user.name === name) {
        data.splice(i, 1);
      }
    });

    return "success";
  };

  static updateUser = (id, name = null, job = null) => {
    const user = data.find((user) => user.id == id);

    if (!user) {
      return null;
    }

    if (name) {
      user.name = name;
    }
    if (job) {
      user.job = job;
    }

    return user;
  };
};
