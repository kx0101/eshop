import express, { json, urlencoded } from 'express';
import cors from 'cors';
import dotenv from "dotenv";
import colors from 'colors';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
import { router as productsRoutes } from './routes/products/productsRoutes.js'
import { router as userRoutes } from './routes/users/userRoutes.js';
import { router as orderRoutes } from './routes/orders/orderRoutes.js';
import { connectDB } from './config/db.js';

dotenv.config();

connectDB();

const app = express();

app.use(express.json());
app.use(urlencoded({ extended: false }));
app.use(cors({
    origin: "*"
}));

app.get("/", (req, res) => {
    res.send("Hi from API")
})

app.use('/api/products', productsRoutes)
app.use('/api/users', userRoutes);
app.use('/api/orders', ordersRoutes);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5500;

app.listen(PORT, () => {
    console.log(`Server running in ${process.env.NODE_ENV} on port ${process.env.PORT}`)
})