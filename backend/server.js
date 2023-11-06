import express from 'express'
import mongooseConnect from './config/mongooseConnect.js'
import bodyParser from 'body-parser'
import dotenv from 'dotenv'
import userRouter from './routes/userRoutes.js'
import adminRouter from './routes/adminRoutes.js'
import cors from 'cors'
import issuerRouter from './routes/issuerRoutes.js'
dotenv.config()


const app = express()

app.use(cors('*'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

app.use('/user', userRouter)
app.use('/admin', adminRouter)
app.use('/issuer', issuerRouter)


mongooseConnect()

app.listen(3002, () => console.log('connected to server'))

