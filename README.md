# Restaurant Reservation Management System

A full-stack MERN application built in 48 hours to manage restaurant bookings with role-based access control.

## 🚀 Live Demo
**Frontend:** [Insert your Render/Vercel link here]  
**Backend:** [Insert your Render/Railway link here]

## 🛠 Tech Stack
- **Frontend:** React.js, Axios, React Router
- **Backend:** Node.js, Express.js
- **Database:** MongoDB Atlas (Mongoose)
- **Auth:** JWT (JSON Web Tokens) & BcryptJS

## 🧠 Reservation & Availability Logic
This is the core of the application:
1. **Capacity Check:** The system filters tables where `capacity >= requested_guests`.
2. **Double-Booking Prevention:** - Before confirming a booking, the server queries the `Reservations` collection for any existing bookings on the specific `date` and `timeSlot`.
   - It gathers the `tableIds` of those occupied tables.
   - It then searches for an available table that is **NOT** in the occupied list.
3. **Table Assignment:** The system automatically assigns the smallest available table that fits the group to maximize restaurant efficiency.

## 👥 Roles
- **Customer:** Can register, login, create reservations, and view their own booking history.
- **Admin:** Can view all reservations across the restaurant, including customer details and table assignments.

## ⚙️ Setup Instructions
1. Clone the repo.
2. Inside `/server`, create a `.env` with `MONGO_URI`, `PORT`, and `JWT_SECRET`.
3. Run `npm install` in both `/server` and `/client`.
4. Run `node seed.js` in the server folder to initialize restaurant tables.
5. Use `npm start` for frontend and `nodemon server.js` for backend.
