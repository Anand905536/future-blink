# Live Link
https://future-blink-1kisaiyi8-anand905536s-projects.vercel.app

# MERN Stack Application

This is a full-stack MERN application with separate frontend and backend.

## Project Structure

app/
├── client/
│   └── ai_flow/        # Frontend (React)
└── server/             # Backend (Node.js, Express)

---

## Prerequisites

- Node.js (v18 or later recommended)
- npm
- MongoDB (local or cloud)

---

## Installation & Setup

### 1. Clone the repository

https://github.com/Anand905536/future-blink.git

---

### 2. Install backend dependencies

cd app/server  
npm install

---

### 3. Install frontend dependencies

cd app/client/ai_flow  
npm install

---

## Environment Variables

Create a `.env` file inside the `app/server` directory:
PORT=4000 

---

## Running the Application

### Start Backend Server

cd app/server  
npm run dev  

Backend will run on:  
http://localhost:4000

---

### Start Frontend Application

cd app/client/ai_flow  
npm run dev  

Frontend will run on the port shown in the terminal (usually http://localhost:3000 or http://localhost:5173)

---

## Notes

- Run frontend and backend in separate terminals.
- Ensure `.env` is added to `.gitignore`.
- Also ensure mongo url should be there in .env
- Both services must be running for the app to work.

---

## Author

ANAND

