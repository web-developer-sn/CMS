import express from 'express'
import './config/db.js'
import rootRouter from './routes/rootRoutes.js'
import dotenv from 'dotenv'
import bodyParser from 'body-parser';
import cors from 'cors';
dotenv.config()
const app = express();
app.use(cors())
app.use(bodyParser.urlencoded())
app.use(bodyParser.json())
app.use('/api', rootRouter)
const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log("Server listening on port", PORT)
})