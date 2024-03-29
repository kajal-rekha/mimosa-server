"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const booking_controller_1 = __importDefault(require("../controllers/booking.controller"));
const auth_middleware_1 = __importDefault(require("../middlewares/auth.middleware"));
const bookingRouter = express_1.default.Router();
const authInstance = new auth_middleware_1.default();
const bookingInstance = new booking_controller_1.default();
// create a booking
bookingRouter.post("/create/:bid", authInstance.isAuthenticated, bookingInstance.createABooking);
// delete a booking
bookingRouter.delete("/:bid", authInstance.isAuthenticated, bookingInstance.deleteABooking);
// get all all bookings
bookingRouter.get("/", authInstance.isAuthenticated, authInstance.isAdmin, bookingInstance.getAllBookings);
exports.default = bookingRouter;
