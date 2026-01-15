/* eslint-disable no-console */
import express from "express";
import config from "./config";
import { setupSwagger } from "./swagger";
import cors from "cors";
import connectDB from "./config/db";
import bookingsRoute from "./routes/booking";

const { PORT } = config;

// Init express app
const app = express();
app.use(express.json());

// CORS for (dev)
app.use(
  cors({
    origin: "*",
    methods: "*",
    allowedHeaders: "*",
  })
);

// Swagger Docs
setupSwagger(app);

connectDB();

// Default Route
app.get("/", (req, res) => {
  res.send("Server :)");
});

app.use("/api/bookings", bookingsRoute);

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Express is listening at http://localhost:${PORT}`);
  // eslint-disable-next-line no-console
  console.log(`Swagger Docs available at http://localhost:${PORT}/docs`);
});
