import express from 'express'
import * as controller from '../controllers/userCont.js'

const userRouter = express.Router()

userRouter.post('/register', controller.register)

userRouter.post('/login', controller.login)

userRouter.get('/get-user/:id', controller.get_user)

userRouter.post('/register-vehicle/:id', controller.reg_vehicle)

userRouter.patch('/update-user/:id', controller.update_user)

userRouter.get('/get-vehicle/:id', controller.get_vehicle)

userRouter.post('/apply-plate/:id', controller.apply_plate)

export default userRouter