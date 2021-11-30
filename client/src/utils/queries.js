import gql from 'graphql-tag';

export const QUERY_PRODUCTS = gql`
  query getTools($category: ID) {
    tools(category: $category) {
      _id
      name
      description
      price
      quantity
      image
      category {
        _id
      }
    }
  }
`;

export const QUERY_CHECKOUT = gql`
  query getCheckout($tools: [ID]!) {
    checkout(tools: $tools) {
      session
    }
  }
`;

export const QUERY_ALL_TOOLS = gql`
  {
    tools {
      _id
      name
      description
      price
      quantity
      category {
        name
        _id
      }
    }
  }
`;

export const QUERY_TOOLS_BY_CATEGORY = gql`
query ToolsByCategory($category: ID) {
  toolsByCategory(category: $category) {
    _id
    name
    description
    image
    quantity
    price
    category {
      _id
    }
  }
}
`

export const QUERY_CATEGORIES = gql`
{
  categories {
    _id
    name
  }
}
`;

export const QUERY_USER = gql`
{
  user {
    firstName
    lastName
    orders {
      _id
      purchaseDate
      tools {
        _id
        name
        description
        price
        quantity
        image
      }
    }
  }
}
`;

