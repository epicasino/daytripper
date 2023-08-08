const { User } = require('../models/');
const { AuthenticationError, signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id }).select(
          '-__v -password'
        );

        return userData;
      }

      throw AuthenticationError;
    },
    users: async () => {
      return await User.find({});
    },
    getTrip: async (parent, { tripId }, context) => {
      if (context.user) {
        const tripData = await User.findOne({ _id: context.user._id }).select({
          trips: { _id: tripId },
        });
      }
    },
  },
  Mutation: {
    login: async (parent, { username, password }) => {
      const user = await User.findOne({ username });

      if (!user) {
        throw AuthenticationError;
      }

      const correctPass = await user.isCorrectPassword(password);

      if (!correctPass) {
        throw AuthenticationError;
      }

      const token = signToken(user);
      return { token, user };
    },
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { user, token };
    },
    removeUser: async (parent, { userId }) => {
      const user = await User.findByIdAndDelete(userId);
      if (user) {
        return user;
      }
    },
    addTrip: async (parent, { start, destination, waypoints }, context) => {
      // console.log(context.user);
      if (context.user) {
        const addedTrip = await User.findOneAndUpdate(
          {
            _id: context.user._id,
          },
          {
            $addToSet: {
              trips: {
                startLocation: start,
                destinationLocation: destination,
                waypoints: waypoints,
              },
            },
          },
          { new: true }
        );

        return addedTrip;
      }

      throw AuthenticationError;
    },
    removeTrip: async (parent, { tripId }, context) => {
      if (context.user) {
        const removedTrip = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { trip: { tripId } } },
          { new: true }
        );

        return removedTrip;
      }

      throw AuthenticationError;
    },
  },
};

module.exports = resolvers;
