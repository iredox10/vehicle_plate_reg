import express from 'express'
import * as controller from '../controllers/userCont.js'

const userRouter = express.Router()

userRouter.post('/register', controller.register)

userRouter.post('/login', controller.login)


export default userRouter