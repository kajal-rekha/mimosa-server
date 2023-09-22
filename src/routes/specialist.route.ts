import express, { Router } from "express";

const specialistRouter: Router = express.Router();

// get all specilist
specialistRouter.get("/");

// get a specilist
specialistRouter.get("/:sid");

// create a specilist
specialistRouter.post("/");

// update a specilist
specialistRouter.put("/:sid");

// delete a specilist
specialistRouter.delete("/:sid");

export default specialistRouter;
