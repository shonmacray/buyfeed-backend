const { gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    users: [User]
    checkIfNumberExits(number: String!): Exist
    getUserByNumber(number: String!): User
  }
  type Mutation {
    authUser(user: UserInput): User
  }
  type Exist {
    exist: Boolean!
  }
  type User {
    id: ID!
    username: String!
    number: String!
    avatarUrl: String!
    joinDate: String!
    new: Boolean!
  }
  input UserInput {
    username: String!
    number: String!
    avatarUrl: String!
  }
`;

module.exports = typeDefs;
