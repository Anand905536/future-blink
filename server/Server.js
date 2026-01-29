import dotenv from 'dotenv'
dotenv.config();
import cors from 'cors'
import express from 'express'
import { db } from './config/db.js'
import route from './routes/routes.js';
const app = express();

// routes redirected
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', route)

// Database Connection
db()

// server connection
const PORT = process.env.PORT || 5000
app.listen(PORT, () => { console.log(`🚀 Server is running on the port ${PORT} 🚀`) })