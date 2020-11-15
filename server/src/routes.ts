import express from 'express';
import multer from 'multer'
import uploadConfig from './upload'

import userController from './controllers/userControllers'
import sessionController from './controllers/sessionController'
import postController from './controllers/postController'

const upload = multer(uploadConfig)
const routes = express.Router(); 

const UserController  = new userController()
const PostController = new postController()
const SessionController = new sessionController()

routes.post('/register',upload.single('photo'), UserController.create)
routes.post('/session',SessionController.create)
routes.post('/post',upload.single('photoPost'),PostController.create)
routes.delete('/post/:id',PostController.delete)

export default routes