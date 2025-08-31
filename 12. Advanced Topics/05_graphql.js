// =====================================
// 05 - GRAPHQL
// =====================================
// NOTES:
// GraphQL = flexible API query language
// Queries, Mutations, and Subscriptions

const { ApolloServer, gql } = require("apollo-server");

// Example 1: Type definitions
const typeDefs = gql`
  type User {
    id: ID
    name: String
    age: Int
  }
  type Query {
    users: [User]
  }
`;

// Example 2: Resolver functions
const users = [{id:1,name:"Partho",age:25}];
const resolvers = {
    Query: {
        users: () => users
    }
};

// Example 3: Apollo Server
const server = new ApolloServer({ typeDefs, resolvers });
server.listen().then(({ url }) => console.log(`Server ready at ${url}`));

// Example 4: Query example
// query { users { id name age } }

// Example 5: Mutation example
// mutation { addUser(name:"Kumar", age:26){ id name } }
