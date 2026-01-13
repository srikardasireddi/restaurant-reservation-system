import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [role, setRole] = useState('');
  const [reservations, setReservations] = useState([]);
  const [formData, setFormData] = useState({
    reservationDate: '',
    timeSlot: '',
    guests: 1
  });

  useEffect(() => {
    setRole(localStorage.getItem('role'));
    fetchReservations();
  }, []);

  const fetchReservations = async () => {
    try {
      const token = localStorage.getItem('token');
      const res = await axios.get('http://localhost:5000/api/reservations', {
        headers: { 'x-auth-token': token }
      });
      setReservations(res.data);
    } catch (err) {
      console.error("Error fetching reservations");
    }
  };

  const handleBooking = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      await axios.post('http://localhost:5000/api/reservations', formData, {
        headers: { 'x-auth-token': token }
      });
      alert("Reservation Successful!");
      fetchReservations(); // Refresh the list
    } catch (err) {
      alert(err.response?.data?.msg || "Booking failed");
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>{role === 'admin' ? 'Admin Panel' : 'Customer Dashboard'}</h1>
      
      {role === 'customer' && (
        <div style={{ border: '1px solid #ccc', padding: '15px', marginBottom: '20px' }}>
          <h3>Book a Table</h3>
          <form onSubmit={handleBooking}>
            <input type="date" onChange={e => setFormData({...formData, reservationDate: e.target.value})} required />
            <select onChange={e => setFormData({...formData, timeSlot: e.target.value})} required>
              <option value="">Select Time</option>
              <option value="18:00">6:00 PM</option>
              <option value="19:00">7:00 PM</option>
              <option value="20:00">8:00 PM</option>
              <option value="21:00">9:00 PM</option>
            </select>
            <input type="number" placeholder="Guests" min="1" max="10" onChange={e => setFormData({...formData, guests: e.target.value})} required />
            <button type="submit">Check Availability & Book</button>
          </form>
        </div>
      )}

      <h3>{role === 'admin' ? 'All Bookings' : 'My Reservations'}</h3>
      <table border="1" cellPadding="10" style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th>Date</th>
            <th>Time</th>
            <th>Guests</th>
            <th>Table #</th>
            {role === 'admin' && <th>Customer</th>}
          </tr>
        </thead>
        <tbody>
          {reservations.map(r => (
            <tr key={r._id}>
              <td>{r.reservationDate}</td>
              <td>{r.timeSlot}</td>
              <td>{r.guests}</td>
              <td>{r.table?.tableNumber}</td>
              {role === 'admin' && <td>{r.user?.name}</td>}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;