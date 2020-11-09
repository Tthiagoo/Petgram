import express from 'express';
import multer from 'multer'
import uploadConfig from './upload'

import userController from './controllers/userControllers'

const upload = multer(uploadConfig)
const routes = express.Router(); 

const UserController  = new userController()

routes.post('/users',upload.single('photo'), UserController.create)


export default routes