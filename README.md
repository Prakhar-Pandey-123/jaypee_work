#user portal =>
https://jaypee-work.vercel.app/
#admin portal =>
https://jaypee-work-admin-portal.vercel.app/
# Smart AI Doctor Appointment System

A full-stack MERN-based healthcare platform that allows patients to book appointments with doctors, doctors to manage appointments, and administrators to manage the platform. In addition to the core appointment booking system, an AI-powered symptom assistant helps users identify relevant medical specializations and find suitable doctors.

---

# Project Setup Instructions

## Prerequisites

Make sure you have installed:

- Node.js
- MongoDB Atlas (or local MongoDB)
- Git

---

## Clone Repository

```bash
git clone <repository-url>
cd Smart-AI-Doctor-Appointment-System
```

---

## Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file inside the backend folder:

```env
PORT=4000

MONGODB_URI=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret

CLOUDINARY_CLOUD_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_SECRET_KEY=your_cloudinary_secret

RAZORPAY_KEY_ID=your_razorpay_key
RAZORPAY_KEY_SECRET=your_razorpay_secret

GEMINI_API_KEY=your_gemini_api_key
CURRENCY="INR"
```

Run backend:

```bash
npm run server
```

---

## User Frontend Setup

```bash
cd frontend
npm install
```

Create `.env`:

```env
VITE_BACKEND_URL=http://localhost:4000
```

Run frontend:

```bash
npm run dev
```

---

## Admin/Doctor Frontend Setup

```bash
cd admin
npm install
```

Create `.env`:

```env
VITE_BACKEND_URL=http://localhost:4000
```

Run admin panel:

```bash
npm run dev
```

---

# Features Implemented

## Patient Features

- User Registration and Login
- Secure JWT Authentication
- Browse Available Doctors
- View Doctor Profiles
- Book Appointments
- Online Appointment Payment using Razorpay
- View Appointment History
- Cancel Appointments
- Manage Personal Profile

---

## Doctor Features

- Doctor Login
- View Dashboard Statistics
- View Daily Appointments
- Accept and Complete Appointments
- Cancel Appointments
- Track Patient Information
- Manage Appointment Workflow

---

## Admin Features

- Admin Authentication
- Add New Doctors
- Manage Doctor Records
- View All Appointments
- Cancel Appointments
- Monitor Platform Statistics
- Dashboard Analytics

---

## AI-Powered Symptom Assistant (Additional Feature)

An intelligent healthcare assistant built using Google's Gemini API.

### Functionality

- Users enter symptoms in natural language.
- AI analyzes the symptoms.
- Suggests possible health conditions.
- Recommends basic home remedies for minor issues.
- Identifies the most relevant medical specialization.
- Displays suitable doctors based on the recommended specialization.
- Helps users decide whether medical consultation is required.

### Benefits

- Faster healthcare guidance.
- Better doctor discovery.
- Improved user experience.
- Reduces confusion when selecting specialists.

---

# Tech Stack Used

## Frontend

- React.js
- React Router DOM
- Tailwind CSS
- Axios
- React Toastify

---

## Backend

- Node.js
- Express.js
- JWT Authentication
- Bcrypt
- Multer

---

## Database

- MongoDB
- Mongoose

---

## Cloud & Media

- Cloudinary

---

## Payment Gateway

- Razorpay

---

## AI Integration

- Google Gemini API

---

# Key Modules

- Authentication System
- Doctor Management
- Appointment Booking System
- Appointment Tracking
- Payment Integration
- Profile Management
- AI Symptom Analysis
- Dashboard Analytics

---

# Deployment

### Frontend

- Vercel

### Backend

- Render

### Database

- MongoDB Atlas

---

# Future Enhancements

- Video Consultation
- Real-Time Notifications
- Appointment Reminders
- Doctor Availability Calendar
- Medical Report Uploads
- Prescription Management
- Advanced AI Healthcare Recommendations

---

# Author

**Prakhar Pandey**

B.Tech Computer Science Engineering

MERN Stack Developer | DSA Enthusiast | Full Stack Developer
