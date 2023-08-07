import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation LoginUser($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      token
      user {
        _id
        email
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation AddUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        email
        username
      }
    }
  }
`;

export const ADD_TRIP = gql`
  mutation AddTrip(
    $start: String!
    $destination: String!
    $waypoints: [WaypointInput]
  ) {
    addTrip(start: $start, destination: $destination, waypoints: $waypoints) {
      _id
      destinationLocation
      startLocation
      waypoints {
        formatted_address
        lat
        lng
        name
        placeId
      }
    }
  }
`;

export const REMOVE_TRIP = gql`
  mutation AddTrip($tripId: String!) {
    removeTrip(tripId: $tripId) {
      _id
      email
      username
      trips {
        _id
        destinationLocation
        startLocation
        waypoints {
          name
        }
      }
    }
  }
`;
