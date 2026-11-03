import { AppDataSource } from "../data-source"
import { NextFunction, Request, Response } from "express"
import { Producte } from "../entities/Producte"

export class ProductController {

    private userRepository = AppDataSource.getRepository(Producte)

    async all(request: Request, response: Response, next: NextFunction) {
        return this.userRepository.find()
    }

    async one(request: Request, response: Response, next: NextFunction) {
        const id = parseInt(String(request.params.id))


        const user = await this.userRepository.findOne({
            where: { id }
        })

        if (!user) {
            return "unregistered user"
        }
        return user
    }

    async save(request: Request, response: Response, next: NextFunction) {
        const { stock } = request.body;

        const user = Object.assign(new Producte(), {
            stock
        })

        return this.userRepository.save(user)
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        const id = parseInt(String(request.params.id))

        let userToRemove = await this.userRepository.findOneBy({ id })

        if (!userToRemove) {
            return "this user not exist"
        }

        await this.userRepository.remove(userToRemove)

        return "user has been removed"
    }

}