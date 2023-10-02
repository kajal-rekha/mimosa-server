import express, { Router } from "express";
import AuthMiddleware from "../middlewares/auth.middleware";

const bookingRouter: Router = express.Router();

const authInstance = new AuthMiddleware();

// create a booking
bookingRouter.post("/create", authInstance.isAuthenticated);

// get all booking for user
bookingRouter.get("/read", authInstance.isAuthenticated);

// delete a booking
bookingRouter.delete("/:bid", authInstance.isAuthenticated);

// get all all bookings
bookingRouter.post("/", authInstance.isAuthenticated, authInstance.isAdmin);

export default bookingRouter;
