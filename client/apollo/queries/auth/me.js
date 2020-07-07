import gql from "graphql-tag";

const ME_QUERY = gql`
query Me {
    me {
      id,
      username,
      email
    }
  }
`;

export default ME_QUERY;
