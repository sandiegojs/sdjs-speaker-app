import gql from "graphql-tag";

const LOGIN_MUTATION = gql`
mutation Login($input: UsersPermissionsLoginInput!) {
    login( input: $input) { jwt }
  }
`;

export default LOGIN_MUTATION;