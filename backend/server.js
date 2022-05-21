import express, { json, urlencoded } from 'express';
import cors from 'cors';
import dotenv from "dotenv";
import colors from 'colors';
import { router as productsRoutes } from './routes/products/productsRoutes.js'
import { connectDB } from './config/db.js';

dotenv.config();
const PORT = process.env.PORT || 5500;

connectDB();

const app = express();

app.use(json());
app.use(urlencoded({ extended: false }));
app.use(cors({
    origin: "*"
}));

app.get("/", (req, res) => {
    res.send("Hi from API")
})

app.use('/api/products', productsRoutes)

app.listen(PORT, () => {
    console.log(`Server running in ${process.env.NODE_ENV} on port ${process.env.PORT}`)
})