require("dotenv").config;
const { ApolloServer, gql } = require("apollo-server");

const PORT = process.env.PORT || 9000;

const typeDefs = gql`
  type Book {
    title: String
    author: String
  }
  type Query {
    books: [Book]
  }
`;
const books = [
  {
    title: "Harry Potter and the Chamber of Secrets",
    author: "J.K. Rowling"
  },
  {
    title: "Jurassic Park",
    author: "Michael Crichton"
  }
];

const resolvers = {
  Query: {
    books: () => books
  }
};
const server = new ApolloServer({ typeDefs, resolvers });

server.listen(PORT).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
