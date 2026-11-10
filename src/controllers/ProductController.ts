import { AppDataSource } from "../data-source"
import { NextFunction, Request, Response } from "express"
import { Producte } from "../entities/Producte"
import { MoreThan } from "typeorm"

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

    async produtesMayorStockQue(request: Request, response: Response, next: NextFunction) {
        const numStock = parseInt(String(request.params.stock));

        const user = await this.userRepository.findOne({
            where: {"stock":MoreThan(numStock)}
        })

        return {"type":"produte", "producte":user};

    }

    async save(request: Request, response: Response, next: NextFunction) {
        const { nom, stock } = request.body;
        // console.log(nom)
        var user = Object.assign(new Producte(), {
            nom,
            stock
        })

        try {
            user = await this.userRepository.save(user);
            return {"type":"produte", "producte":user};
        } catch(e) {
            return {"type":"error", "object":e};
        }
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