const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const eventSchema = new Schema({
  // artistName: {
  //     type: String,
  //     required: true
  // },
  // artistPhone: {
  //     type: String
  // },
  // artistEmail: {
  //     type: String,
  //     required: true
  // },
  // promoterName: {
  //     type: String,
  //     required: true
  // },
  // promoterPhone: {
  //     type: String
  // },
  // promoterEmail: {
  //     type: String,
  //     required: true
  // },
  // shareEmails: {
  //     type: Array
  // }
  userId: {
    type: String
  },
  eventCity: {
    type: String,
    required: true
  },
  eventCountry: {
    type: String,
    required: true
  },
  venueName: {
    type: String,
    required: true
  },
  // venueAddress: {
  //     type: String,
  //     required: true
  // },
  performanceDate: {
    type: Date,
    required: true
  }
  // performanceTime: {
  //     type: Date,
  //     required: true
  // },
  // accommodationName: {
  //     type: String,
  //     required: true
  // },
  // accommodationMapUrl: {
  //     type: String,
  //     required: true
  // },
  // arrivalDate: {
  //     type: Date,
  //     required: true
  // },
  // arrivalTime: {
  //     type: Date,
  //     required: true
  // },
  // arrivalMethod: {
  //     type: String,
  //     required: true
  // },
  // departureDate: {
  //     type: Date,
  //     required: true
  // },
  // departureTime: {
  //     type: Date,
  //     required: true
  // },
  // departureMethod: {
  //     type: String,
  //     required: true
  // }
});

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;
