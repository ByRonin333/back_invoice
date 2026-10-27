import * as express from "express"
import * as bodyParser from "body-parser"
import { Request, Response } from "express"
import { AppDataSource } from "./data-source"
import { Routes } from "./routes"
import { Usuario } from "./entities/Usuario"
import { Profesor } from "./entities/Profesor"
import { DataSource } from "typeorm"
import { Docencia } from "./entities/Docencia"
import { Modulo } from "./entities/Modulo"
import { Aula } from "./entities/Aula"
import { TipoAula } from "./entities/TipoAula"

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

    // Para crear y añadir objetos en la base de datos
    let modulo1=new Modulo()
        modulo1.codModulo='cod1'
        modulo1.nombreModulo='nom1'
    await AppDataSource.manager.save(modulo1)
    
    // Modulo sin Docencia
    let modulo2=new Modulo()
        modulo2.codModulo='cod2'
        modulo2.nombreModulo='nom2'
    await AppDataSource.manager.save(modulo2)

    let profe = new Profesor()
        profe.dni='dni1'
        profe.apellidos='Abc def'
        profe.correoElectronico= 'correo1'
        profe.fechaIncorporacion= new Date()
        profe.name= 'nom1'
        profe.telefono= '1'
    await AppDataSource.manager.save(profe)

    let doc1=new Docencia()
        doc1.cursoAcademico= '2026-2027'
        doc1.modulo=modulo1
        doc1.profesor=profe
    await AppDataSource.manager.save(doc1)
    
    let doc2=new Docencia()
        doc2.cursoAcademico= '2025-2026'
        doc2.modulo=modulo1
        doc2.profesor=profe
    await AppDataSource.manager.save(doc2)
    
    let aula1=new Aula()
        aula1.capacidad=30
        aula1.numeroAula=215
        aula1.tipo=TipoAula.ORDENADORES
        aula1.modulos=[modulo1, modulo2]
    await AppDataSource.manager.save(aula1)

    let aula2=new Aula()
        aula2.capacidad=15
        aula2.numeroAula=220
        aula2.tipo=TipoAula.TALLER
        aula2.modulos=[modulo1, modulo2]
    await AppDataSource.manager.save(aula2)


    console.log(modulo1)
    console.log(modulo2)
    console.log(profe)
    console.log(doc1)
    console.log(doc2)
    console.log(aula1)
    console.log(aula2)

    app.listen(3000)

    console.log("Express server has started on port 3000. Open http://localhost:3000/users to see results")

}).catch(error => console.log(error))
