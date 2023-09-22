import express, { Router } from "express";

const bookingRouter: Router = express.Router();

// create a booking
bookingRouter.post("/create");

// get all all bookings
bookingRouter.post("/");

// get all booking for user
bookingRouter.get("/read");

// delete a booking
bookingRouter.delete("/:bid");

export default bookingRouter;
