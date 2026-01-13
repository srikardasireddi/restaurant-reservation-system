const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const Reservation = require('../models/Reservation');
const Table = require('../models/Table');

router.post('/', auth, async (req, res) => {
  const { reservationDate, timeSlot, guests } = req.body;
  try {
    const occupiedReservations = await Reservation.find({ reservationDate, timeSlot }).select('table');
    const occupiedTableIds = occupiedReservations.map(r => r.table.toString());

    const availableTable = await Table.findOne({
      _id: { $nin: occupiedTableIds },
      capacity: { $gte: guests }
    }).sort({ capacity: 1 });

    if (!availableTable) {
      return res.status(400).json({ msg: 'No tables available for this time' });
    }

    const newReservation = new Reservation({
      user: req.user.id,
      table: availableTable._id,
      reservationDate,
      timeSlot,
      guests
    });

    const reservation = await newReservation.save();
    res.json(reservation);
  } catch (err) {
    res.status(500).send('Server Error');
  }
});

router.get('/', auth, async (req, res) => {
  try {
    let reservations;
    if (req.user.role === 'admin') {
      reservations = await Reservation.find().populate('user', 'name').populate('table');
    } else {
      reservations = await Reservation.find({ user: req.user.id }).populate('table');
    }
    res.json(reservations);
  } catch (err) {
    res.status(500).send('Server Error');
  }
});

module.exports = router;