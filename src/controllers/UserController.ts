import { AppDataSource } from "../data-source";
import { Chat } from "../entity/Chat";
import { User } from "../entity/User";
import { Request, Response } from "express";

export default class UserController {
    addUser = async (req: Request, res: Response) => {
        let info = {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            age: req.body.age,
        };

        const userRepo = AppDataSource.getRepository(User);
        const user = userRepo.create(info);

        await userRepo
            .save(user)
            .then((data) => {
                res.json(data);
            })
            .catch((err) => console.log(err));
    };
    getUser = async (req: Request, res: Response) => {
        let name = req.params.firstName;
        const userRepo = AppDataSource.getRepository(User);

        await userRepo
            .findOne({ where: { firstName: name } })
            .then((data) => {
                res.json(data);
                console.log("Get User: ", data);
            })
            .catch((err) => console.log(err));
    };

    getAllUsers = async (req: Request, res: Response) => {
        const userRepo = AppDataSource.getRepository(User);

        await userRepo
            .findAndCount()
            .then((data) => {
                res.json(data);
                console.log("Get all User: ", data);
            })
            .catch((err) => console.log(err));
    };


    updateUser = async (req: Request, res: Response) => {
        const userRepo = AppDataSource.getRepository(User);

        await userRepo
            .createQueryBuilder()
            .update(User)
            .set(req.body)
            .where({ firstName: req.params.firstName })
            .execute()
            .then((data) => {
                res.json(data);
                console.log("Update User: ", data);
            })
            .catch((err) => console.log(err));
    };

    deleteUser = async (req: Request, res: Response) => {
        const userRepo = AppDataSource.getRepository(User);

        await userRepo
            .createQueryBuilder()
            .delete()
            .from(User)
            .where({ firstName: req.params.firstName })
            .execute()
            .then((data) => {
                res.json(data);
                console.log("Delete User: ", data);
            })
            .catch((err) => console.log(err));
    };
}
