import { Schema } from 'mongoose';

const tripSchema = new Schema({
  startLocation: {
    type: String,
    required: true,
  }
  destinationLocation: {
    type: String,
    required: true,
  }
  stops: [{
    location: {
      type: String,
    }
  }]
})

module.exports = tripSchema;