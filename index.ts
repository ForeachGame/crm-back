import dotenv from 'dotenv'
import express, { Express, Request, Response } from 'express'
dotenv.config()

const PORT = process.env.SERVER_PORT

const app: Express = express()

const start = () => {
    try {
        app.listen(PORT, () => {
            console.log(`Server started to port ${PORT}`)
        })
    } catch (e) {
        console.log(e)
    }
}

start()
