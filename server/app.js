import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";

import authRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import companyRoutes from "./routes/companyRoutes.js";
import departmentRoutes from "./routes/departmentRoutes.js";
import projectRoutes from "./routes/projectRoutes.js";
import taskRoutes from "./routes/taskRoutes.js";
import activityLogRoutes from "./routes/activityLogRoutes.js";

import errorHandler from "./middleware/errorMiddleware.js";
import rateLimiter from "./middleware/rateLimiter.js";
import swaggerUi from "swagger-ui-express"; 
import dashboardRoutes from "./routes/dashboardRoutes.js"

import fs from "fs";

const swaggerDocument = JSON.parse(
  fs.readFileSync("./docs/swagger.json", "utf-8")
);



dotenv.config();

const app = express();


// 🔥 GLOBAL MIDDLEWARE
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

// 🔥 RATE LIMITING
app.use("/api", rateLimiter);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// 🔥 ROUTES
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/company", companyRoutes);
app.use("/api/departments", departmentRoutes);
app.use("/api/projects", projectRoutes);
app.use("/api/tasks", taskRoutes);
app.use("/api/logs", activityLogRoutes);
app.use("/api/dashboard", dashboardRoutes);


// ❌ NOT FOUND ROUTE
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
  });
});

// 🔥 GLOBAL ERROR HANDLER
app.use(errorHandler);

export default app;