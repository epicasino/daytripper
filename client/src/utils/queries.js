import { gql } from '@apollo/client';

export const QUERY_ME = gql`
  query Me {
    me {
      _id
      username
      email
      trips {
        _id
        destinationLocation
        startLocation
        waypoints {
          address
          lat
          lng
          name
          placeId
        }
      }
    }
  }
`;

export const GET_TRIP = gql`
  query GetTrip($tripId: String!) {
    getTrip(tripId: $tripId) {
      _id
      destinationLocation
      startLocation
      waypoints {
        address
        lat
        lng
        name
        placeId
      }
    }
  }
`;
