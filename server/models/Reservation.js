const mongoose = require('mongoose');

const ReservationSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'user', required: true },
  table: { type: mongoose.Schema.Types.ObjectId, ref: 'Table', required: true },
  reservationDate: { type: String, required: true }, 
  timeSlot: { type: String, required: true },       
  guests: { type: Number, required: true }
});

module.exports = mongoose.model('Reservation', ReservationSchema);