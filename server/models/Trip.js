const { Schema } = require('mongoose');

const tripSchema = new Schema({
  startLocation: {
    type: String,
    required: true,
  },
  destinationLocation: {
    type: String,
    required: true,
  },
  waypoints: [
    {
      formatted_address: {
        type: String,
      },
      lat: {
        type: String,
      },
      lng: {
        type: String,
      },
      name: {
        type: String,
      },
      placeId: {
        type: String,
      }
    },
  ],
});

module.exports = tripSchema;
