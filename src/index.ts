<<<<<<< HEAD
import express from "express"
=======
import * as express from "express"
>>>>>>> 2cf5dbd (primer commit)
import * as bodyParser from "body-parser"
import { Request, Response } from "express"
import { AppDataSource } from "./data-source"
import { Routes } from "./routes"
<<<<<<< HEAD
import { Profesor } from "./entities/Profesor"
import { Docencia } from "./entities/Docencia"
import { Modulo } from "./entities/Modulo"
import { Aula } from "./entities/Aula"
import { TipoAula } from "./entities/TipoAula"
=======
import { User } from "./entities/User"
>>>>>>> 2cf5dbd (primer commit)

AppDataSource.initialize().then(async () => {

    // create express app
    const app = express()
    app.use(bodyParser.json())

    // register express routes from defined application routes
    Routes.forEach(route => {
        (app as any)[route.method](route.route, (req: Request, res: Response, next: Function) => {
            const result = (new (route.controller as any))[route.action](req, res, next)
            if (result instanceof Promise) {
                result.then(result => result !== null && result !== undefined ? res.send(result) : undefined)

            } else if (result !== null && result !== undefined) {
                res.json(result)
            }
        })
    })

    // setup express app here
    // ...

    // start express server
    app.listen(3000)

    // insert new users for test
<<<<<<< HEAD
    /*await AppDataSource.manager.save(
        AppDataSource.manager.create(Usuario, {
=======
    await AppDataSource.manager.save(
        AppDataSource.manager.create(User, {
>>>>>>> 2cf5dbd (primer commit)
            firstName: "Timber",
            lastName: "Saw",
            age: 27
        })
    )

    await AppDataSource.manager.save(
<<<<<<< HEAD
        AppDataSource.manager.create(Usuario, {
=======
        AppDataSource.manager.create(User, {
>>>>>>> 2cf5dbd (primer commit)
            firstName: "Phantom",
            lastName: "Assassin",
            age: 24
        })
    )
<<<<<<< HEAD
    */

    let mod1 = new Modulo()
    mod1.codigo = 'cod1'
    mod1.nombre = 'nombre1'
    console.log("modul abans de guardar")
    console.log(mod1)

    await AppDataSource.manager.save(mod1)

    console.log("modul després de guardar")
    console.log(mod1)

    let mod2 = new Modulo()
    mod2.codigo = 'cod2'
    mod2.nombre = 'nombre2'
    await AppDataSource.manager.save(mod2)

    let profe = new Profesor()
    profe.dni = 'dni1'
    profe.apellidos = 'apellidos1'
    profe.correoElectronico = 'correo1'
    profe.fechaIncorporacion = new Date()
    profe.nombre = 'nom1'
    profe.edad = 30
    profe.telefono = 'telefono1'
    await AppDataSource.manager.save(profe)

    let doc1 = new Docencia()
    doc1.cursoAcademico = '2026-2027'
    doc1.modulo = mod1
    doc1.profesor = profe
    await AppDataSource.manager.save(doc1)

    let doc2 = new Docencia()
    doc2.cursoAcademico = '2025-2026'
    doc2.modulo = mod1
    doc2.profesor = profe
    await AppDataSource.manager.save(doc1)

    console.log(profe)

    let aula1 = new Aula()
    aula1.capacidad = 30
    aula1.numeroAula = 215
    aula1.tipo = TipoAula.TALLER
    aula1.modulos = [mod1, mod2]
    await AppDataSource.manager.save(aula1)

    let aula2 = new Aula()
    aula2.capacidad = 25
    aula2.numeroAula = 214
    aula2.tipo = TipoAula.ORDENADORES
    aula2.modulos = [mod1, mod2]
    await AppDataSource.manager.save(aula2)


=======
>>>>>>> 2cf5dbd (primer commit)

    console.log("Express server has started on port 3000. Open http://localhost:3000/users to see results")

}).catch(error => console.log(error))
