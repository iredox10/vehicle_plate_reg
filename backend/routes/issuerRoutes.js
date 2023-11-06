import express from 'express';
const issuerRouter = express.Router();
import * as controller from '../controllers/issuerCont.js'

issuerRouter.post('/login', controller.login)

issuerRouter.get('/get-issuer/:id', controller.get_issuer)

issuerRouter.patch('/assign-plate/:id/:issuerId', controller.issue_plate)

issuerRouter.get('/get-plates-req', controller.get_plates_req)

issuerRouter.get('/vehicles', controller.vehicles)
export default issuerRouter;