import express, { Router } from "express";
import UserController from "../controllers/user.controller";
import AuthMiddleware from "../middlewares/auth.middleware";

const userRouter: Router = express.Router();

const authInstance = new AuthMiddleware();
const userInstance = new UserController();

// get an user
userRouter.get("/:uid", authInstance.isAuthenticated, userInstance.getAnUser);

// delete an user
userRouter.delete(
  "/:uid",
  authInstance.isAuthenticated,
  userInstance.deleteAnUser,
);

//update an user
userRouter.put(
  "/:uid",
  authInstance.isAuthenticated,
  userInstance.updateAnUser,
);

// get all users
userRouter.get(
  "/",
  authInstance.isAuthenticated,
  authInstance.isAdmin,
  userInstance.getAllUsers,
);

export default userRouter;
