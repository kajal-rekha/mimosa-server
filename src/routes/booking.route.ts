import express, { Router } from "express";
import BookingCntroller from "../controllers/booking.controller";
import AuthMiddleware from "../middlewares/auth.middleware";

const bookingRouter: Router = express.Router();

const authInstance = new AuthMiddleware();
const bookingInstance = new BookingCntroller();

// create a booking
bookingRouter.post(
  "/create/:bid",
  authInstance.isAuthenticated,
  bookingInstance.createABooking,
);

// delete a booking
bookingRouter.delete(
  "/:bid",
  authInstance.isAuthenticated,
  bookingInstance.deleteABooking,
);

// get all all bookings
bookingRouter.get(
  "/",
  authInstance.isAuthenticated,
  authInstance.isAdmin,
  bookingInstance.getAllBookings,
);

export default bookingRouter;
