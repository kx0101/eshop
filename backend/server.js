import express, { json, urlencoded } from "express";
import cors from "cors";
import dotenv from "dotenv";
import colors from "colors";
import path from "path";
import morgan from "morgan";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import { router as productsRoutes } from "./routes/products/productsRoutes.js";
import { router as userRoutes } from "./routes/users/userRoutes.js";
import { router as ordersRoutes } from "./routes/orders/orderRoutes.js";
import { router as uploadRoutes } from "./routes/upload/uploadRoutes.js";
import { connectDB } from "./config/db.js";

dotenv.config();

connectDB();

const app = express();

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);

app.use("/api/products", productsRoutes);
app.use("/api/users", userRoutes);
app.use("/api/orders", ordersRoutes);
app.use("/api/upload", uploadRoutes);

app.get("/api/config/paypal", (req, res) =>
  res.send(process.env.PAYPAL_CLIENT_ID)
);

const __dirname = path.resolve();
app.use("/uploads", express.static(path.join(__dirname, "/uploads")));

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/frontend/build")));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"))
  );
} else {
  app.get("/", (req, res) => {
    res.send("Hi from API");
  });
}

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5500;

app.listen(PORT, () => {
  console.log(
    `Server running in ${process.env.NODE_ENV} on port ${process.env.PORT}`
  );
});
