import gql from "graphql-tag";

const MEETUPS_QUERY = gql`
  query Meetups {
    events {
      meetupId
      name
    }
  }
`;

export default MEETUPS_QUERY;
