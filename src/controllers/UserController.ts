import { AppDataSource } from "../data-source"
import { NextFunction, Request, Response } from "express"
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> df04eb11453390f7cdbeb77e2e509ad61fafe31d
import { Usuario } from "../entities/Usuario"

export class UserController {

    private userRepository = AppDataSource.getRepository(Usuario)
<<<<<<< HEAD
=======
import { User } from "../entities/User"

export class UserController {

    private userRepository = AppDataSource.getRepository(User)
>>>>>>> 2cf5dbd (primer commit)
=======
>>>>>>> df04eb11453390f7cdbeb77e2e509ad61fafe31d

    async all(request: Request, response: Response, next: NextFunction) {
        return this.userRepository.find()
    }

    async one(request: Request, response: Response, next: NextFunction) {
<<<<<<< HEAD
<<<<<<< HEAD
        const id = parseInt(String(request.params.id))
=======
        const id = parseInt(request.params.id)
>>>>>>> 2cf5dbd (primer commit)
=======
        const id = parseInt(request.params.id)
>>>>>>> df04eb11453390f7cdbeb77e2e509ad61fafe31d


        const user = await this.userRepository.findOne({
            where: { id }
        })

        if (!user) {
            return "unregistered user"
        }
        return user
    }

    async save(request: Request, response: Response, next: NextFunction) {
        const { firstName, lastName, age } = request.body;

<<<<<<< HEAD
<<<<<<< HEAD
        const user = Object.assign(new Usuario(), {
=======
        const user = Object.assign(new User(), {
>>>>>>> 2cf5dbd (primer commit)
=======
        const user = Object.assign(new Usuario(), {
>>>>>>> df04eb11453390f7cdbeb77e2e509ad61fafe31d
            firstName,
            lastName,
            age
        })

        return this.userRepository.save(user)
    }

    async remove(request: Request, response: Response, next: NextFunction) {
<<<<<<< HEAD
<<<<<<< HEAD
        const id = parseInt(String(request.params.id))
=======
        const id = parseInt(request.params.id)
>>>>>>> 2cf5dbd (primer commit)
=======
        const id = parseInt(request.params.id)
>>>>>>> df04eb11453390f7cdbeb77e2e509ad61fafe31d

        let userToRemove = await this.userRepository.findOneBy({ id })

        if (!userToRemove) {
            return "this user not exist"
        }

        await this.userRepository.remove(userToRemove)

        return "user has been removed"
    }

}