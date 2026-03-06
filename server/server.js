import cookieParser from "cookie-parser"
import cors from 'cors'
import dotenv from 'dotenv'
import express from 'express'
import './config/db.js'
import rootRouter from './routes/rootRoutes.js'
import { swaggerSpec, swaggerUi } from "./swagger.js"
dotenv.config()
const app = express();
const allowedOrigins = [
  process.env.ORIGIN,
  process.env.SERVER
];
app.use(cors({
  origin: allowedOrigins, 
  credentials: true,
}));
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use('/api', rootRouter)
// app.use('/api/student', studentRoute)
// app.use('/api/teacher', teacherRouter)
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log("Server listening on port", PORT)
})
