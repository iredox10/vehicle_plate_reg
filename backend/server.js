import express from 'express'
import mongooseConnect from './config/mongooseConnect.js'
import bodyParser from 'body-parser'
import dotenv from 'dotenv'
import userRouter from './routes/userRoutes.js'

dotenv.config()


const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

app.use('/user', userRouter)


mongooseConnect()

app.listen(3002, () => console.log('connected to server'))

