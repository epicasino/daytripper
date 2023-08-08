const typeDefs = `
  type User {
    _id: ID
    username: String
    email: String
    password: String
    trips: [Trip]
  }
  type Trip {
    _id: ID
    startLocation: String
    destinationLocation: String
    waypoints: [Waypoint]
  }
  type Waypoint {
    formatted_address: String
    lat: String
    lng: String
    name: String
    placeId: String
  }
  input WaypointInput {
    formatted_address: String!
    lat: Float!
    lng: Float!
    name: String!
    placeId: String!
  }
  type Auth {
    token: ID!
    user: User
  }
  type Query {
    users: [User]
    me: User
    getTrip(tripId: String!): Trip
  }
  type Mutation {
    login(username: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    removeUser(userId: String!): User
    addTrip(start: String!, destination: String!, waypoints: [WaypointInput]): Trip
    removeTrip(tripId: String!): User
  }
`;

module.exports = typeDefs;
