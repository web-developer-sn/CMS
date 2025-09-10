import express from 'express'
import './config/db.js'
import rootRouter from './routes/rootRoutes.js'
import studentRoute from './routes/student.routes.js'
import teacherRouter from './routes/teacher.routes.js'
import dotenv from 'dotenv'
import { swaggerUi, swaggerSpec } from "./swagger.js";
import bodyParser from 'body-parser';
import cors from 'cors';
import cookieParser from "cookie-parser";
dotenv.config()
const app = express();
app.use(cors({
  origin: 'http://localhost:3000', 
  credentials: true,
}));
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use(bodyParser.urlencoded())
app.use(bodyParser.json())
app.use(cookieParser());
app.use('/api', rootRouter)
// app.use('/api/student', studentRoute)
// app.use('/api/teacher', teacherRouter)
const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log("Server listening on port", PORT)
})