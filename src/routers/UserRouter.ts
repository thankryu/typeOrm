import * as express from "express";
import UserController from "../controllers/UserController";

const userRouter = express.Router();

let userController = new UserController();

userRouter.post("/addUser", userController.addUser);

userRouter.get("/user/:firstName", userController.getUser);

userRouter.get("/allUsers", userController.getAllUsers);

userRouter.put("/user/:firstName", userController.updateUser);

userRouter.delete("/user/:firstName", userController.deleteUser);

export default userRouter;