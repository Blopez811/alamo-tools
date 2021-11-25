const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Category {
    _id: ID
    name: String
  }

  type Tool {
    _id: ID
    name: String
    description: String
    image: String
    quantity: Int
    price: Float
    category: Category
  }

  type Order {
    _id: ID
    purchaseDate: String
    tools: [Tool]
  }

  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
    orders: [Order]
  }

  type Checkout {
    session: ID
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    categories: [Category]
    tools(category: ID, name: String): [Tool]
    tool(_id: ID!): Tool
    user: User
    order(_id: ID!): Order
    checkout(tools: [ID]!): Checkout
  }

  type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    addOrder(tools: [ID]!): Order
    updateUser(firstName: String, lastName: String, email: String, password: String): User
    updateTool(_id: ID!, quantity: Int!): Tool
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
