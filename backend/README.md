# PoojaPaath Backend

Node.js/Express backend for the PoojaPaath booking platform.

## Features

- RESTful API for pooja bookings
- MongoDB database integration
- Email notifications for new bookings
- Testimonial management system
- CORS enabled for frontend integration

## Tech Stack

- **Node.js** + **Express** - Server framework
- **MongoDB** + **Mongoose** - Database
- **Nodemailer** - Email service
- **CORS** - Cross-origin resource sharing

## Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Install nodemon (optional, for development):**
   ```bash
   npm install -g nodemon
   ```

3. **Set up environment variables:**
   ```bash
   cp .env.example .env
   ```

4. **Configure `.env` file:**
   ```env
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/poojapaath
   EMAIL_HOST=smtp.gmail.com
   EMAIL_PORT=587
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-app-password
   ADMIN_EMAIL=admin@poojapaath.com
   FRONTEND_URL=http://localhost:5173
   ```

5. **Start MongoDB:**
   - Make sure MongoDB is installed and running
   - macOS: `brew services start mongodb-community`
   - Or use MongoDB Atlas (cloud)

6. **Seed the database:**
   ```bash
   npm run seed
   ```

7. **Start the server:**
   ```bash
   # Production
   npm start

   # Development (with auto-reload)
   npm run dev
   ```

Server will run on `http://localhost:5000`

## API Endpoints

### Poojas
- `GET /api/poojas` - Get all active poojas
- `GET /api/poojas/:id` - Get single pooja by ID
- `POST /api/poojas` - Create new pooja (Admin)
- `PUT /api/poojas/:id` - Update pooja (Admin)
- `DELETE /api/poojas/:id` - Delete pooja (Admin)

### Bookings
- `POST /api/bookings` - Create new booking
- `GET /api/bookings` - Get all bookings (Admin)
- `GET /api/bookings/:id` - Get single booking (Admin)
- `PATCH /api/bookings/:id` - Update booking status (Admin)
- `DELETE /api/bookings/:id` - Delete booking (Admin)

### Testimonials
- `GET /api/testimonials` - Get approved testimonials
- `POST /api/testimonials` - Submit new testimonial
- `GET /api/testimonials/all` - Get all testimonials (Admin)
- `PATCH /api/testimonials/:id` - Approve/update testimonial (Admin)
- `DELETE /api/testimonials/:id` - Delete testimonial (Admin)

### Health Check
- `GET /api/health` - Server health status

## Email Configuration

For Gmail:
1. Enable 2-factor authentication
2. Generate an app password: https://myaccount.google.com/apppasswords
3. Use the app password in `EMAIL_PASS`

## Project Structure

```
backend/
├── config/
│   └── db.js              # MongoDB connection
├── models/
│   ├── Booking.js         # Booking schema
│   ├── Pooja.js           # Pooja schema
│   └── Testimonial.js     # Testimonial schema
├── routes/
│   ├── bookings.js        # Booking routes
│   ├── poojas.js          # Pooja routes
│   └── testimonials.js    # Testimonial routes
├── controllers/
│   ├── bookingController.js
│   ├── poojaController.js
│   └── testimonialController.js
├── middleware/
│   └── errorHandler.js    # Error handling
├── utils/
│   └── emailService.js    # Email notifications
├── scripts/
│   └── seedPoojas.js      # Database seeding
├── .env                   # Environment variables
├── .env.example           # Environment template
├── server.js              # Entry point
└── package.json
```

## Next Steps

1. Add authentication/authorization for admin routes
2. Implement SMS notifications (Twilio/MSG91)
3. Add payment gateway integration
4. Create admin dashboard
5. Add rate limiting and security middleware
6. Implement booking confirmation workflow
