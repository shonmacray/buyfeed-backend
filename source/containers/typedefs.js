const { gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    users: [User]
  }
  type Mutation {
    authUser(user: UserInput): User
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
