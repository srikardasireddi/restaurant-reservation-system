# 🍽️ Restaurant Reservation Management System

A production-ready Full-Stack MERN application built to streamline restaurant bookings with automated table assignment and role-based security.

## 🔗 Live Demo
- **Frontend:** (https://restaurant-reservation-system-eta.vercel.app/)
- **Backend API:** (https://restaurant-reservation-api-xbb2.onrender.com)

## 🛠 Tech Stack
- **Frontend:** React.js, Axios, React Router, CSS3 (Custom Styles)
- **Backend:** Node.js, Express.js
- **Database:** MongoDB Atlas (Mongoose)
- **Authentication:** JWT (JSON Web Tokens) & BcryptJS for secure password hashing

## 🧠 Smart Reservation Logic
The application features a custom algorithm to optimize restaurant seating:
1. **Capacity Validation:** Filters tables based on `requested_guests <= table_capacity`.
2. **Double-Booking Prevention:** - Queries the database for existing reservations in the specific `date` and `timeSlot`.
   - Identifies occupied `tableIds` and excludes them from the search.
3. **Optimized Assignment:** Automatically selects the smallest available table that fits the group to maximize floor efficiency.

## 👥 Role-Based Access Control (RBAC)
- **Customer:** Personalized dashboard to create, manage, and view their own booking history.
- **Administrator:** Master view of all restaurant bookings with details on customer names and assigned table numbers.

## ⚙️ Local Setup Instructions
1. Clone the repository.
2. Navigate to `/server`, create a `.env` file with `MONGO_URI`, `PORT`, and `JWT_SECRET`.
3. Run `npm install` in bot
h `/server` and `/client` directories.
4. Run `node seed.js` in the server folder to initialize the restaurant table layout.
5. Launch the app: `npm start` (Frontend) and `nodemon server.js` (Backend).
<img width="1920" height="1020" alt="React App - Brave 13-01-2026 11_49_35 AM" src="https://github.com/user-attachments/assets/e24a0ce4-6ead-4eb2-95b1-c1a6a218fe6b" />
<img width="1897" height="876" alt="Screenshot 2026-01-13 115425" src="https://github.com/user-attachments/assets/47ee58f4-7f10-4252-9945-f9bb7bc219ce" />
