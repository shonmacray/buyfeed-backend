const UserModel = require("./models/user");

const resolvers = {
  Query: {
    users: async () => {
      let users = await UserModel.find();
      return users;
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
