const UserModel = require("./models/user");

const resolvers = {
  Query: {
    users: async () => {
      let users = await UserModel.find();
      return users;
    },
    checkIfNumberExits: async (_, { number }) => {
      const user = await UserModel.findOne({ number });
      if (user) {
        return { exist: true };
      } else {
        return { exist: false };
      }
    },
    getUserByNumber: async (_, { number }) => {
      const user = await UserModel.findOne({ number });
      return user;
    }
  },
  Mutation: {
    authUser: async (_, { user }) => {
      // add new user
      let NewUser = await UserModel.create({
        ...user,
        joinDate: Date.now()
      });
      return NewUser;
    }
  }
};

module.exports = resolvers;
