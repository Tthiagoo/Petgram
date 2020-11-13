import express from 'express';
import multer from 'multer'
import uploadConfig from './upload'

import userController from './controllers/userControllers'
import sessionController from './controllers/sessionController'

const upload = multer(uploadConfig)
const routes = express.Router(); 

const UserController  = new userController()

const SessionController = new sessionController()

routes.post('/register',upload.single('photo'), UserController.create)
routes.post('/session',SessionController.create)

export default routes