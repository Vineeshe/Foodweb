import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { errorMiddleware } from './error/error.js';
import { dbConnection } from './database/dbConnection.js';
import reservationRouter from './routes/reservationRoutes.js';

const app = express()


dotenv.config({ path: '.env' })

app.use(cors({
    origin: [process.env.FRONTEND_URL],
    methods: ["POST"],
    credentials: true
}))
app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))
dbConnection()
app.use(errorMiddleware)
app.use('/api/v1/reservation',reservationRouter)










export default app;