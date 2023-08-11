import express from 'express'
import * as controller from '../controllers/adminCont.js'

const adminRouter = express.Router()

adminRouter.post('/add-admin',controller.admin)

adminRouter.post('/login', controller.login)

adminRouter.get('/get-admin/:id', controller.get_admin)

adminRouter.post('/add-issuer/:id', controller.register_issuer)

export default adminRouter