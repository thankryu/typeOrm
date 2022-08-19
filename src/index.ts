import { AppDataSource } from "./data-source";
import express from "express";
import userRouter from "./routers/UserRouter";

const app = express();
app.use(express.json());

AppDataSource.initialize()
    .then(async () => {})
    .catch((error) => console.log(error));

app.use("/api", userRouter);
app.listen(3000, () => {
    console.log("Server running");
});