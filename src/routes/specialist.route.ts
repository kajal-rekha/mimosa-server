import express, { Router } from "express";
import SpecialistController from "../controllers/specialist.controller";
import AuthMiddleware from "../middlewares/auth.middleware";

const specialistRouter: Router = express.Router();

const authInstance = new AuthMiddleware();
const specialistInstance = new SpecialistController();
// get all specilist
specialistRouter.get("/", specialistInstance.getAllSpecialists);

// get a specilist
specialistRouter.get("/:sid", specialistInstance.getASpecialist);

// create a specilist
specialistRouter.post(
  "/",
  authInstance.isAuthenticated,
  authInstance.isAdmin,
  specialistInstance.createASpecialist,
);

// update a specilist
specialistRouter.put(
  "/:sid",
  authInstance.isAuthenticated,
  authInstance.isAdmin,
  specialistInstance.updateASpecialist,
);

// delete a specilist
specialistRouter.delete(
  "/:sid",
  authInstance.isAuthenticated,
  authInstance.isAdmin,
  specialistInstance.deleteASpecialist,
);

export default specialistRouter;
