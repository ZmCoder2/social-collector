const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Users {
    _id: ID
    name: String
    email: String
    password: String
  
  }

  type Auth {
    token: ID!
    users: Users
  }

  type Query {
    users: [Users]!
    
  }

  type Mutation {
    addUser(name: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth

    
    
  }
`;

module.exports = typeDefs;