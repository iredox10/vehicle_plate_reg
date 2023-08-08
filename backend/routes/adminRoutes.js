import express from 'express'
import * as controller from '../controllers/adminCont.js'

const adminRouter = express.Router()

adminRouter.post('/add-admin',controller.admin)

adminRouter.post('/login', controller.login)

adminRouter.post('/register-issuer/:id', controller.register_issuer)

export default adminRouter