import express from 'express';
import multer from 'multer'
import uploadConfig from './upload'
import userController from './controllers/userControllers'
import sessionController from './controllers/sessionController'
import postController from './controllers/postController'
import friendRequestController from './controllers/FriendRequestController'
import friendController from './controllers/FriendController'
import likeController from './controllers/likeController';
import commentController from './controllers/commentController';

const upload = multer(uploadConfig)
const routes = express.Router(); 

const UserController  = new userController()
const PostController = new postController()
const SessionController = new sessionController()
const FriendRequestController = new friendRequestController()
const FriendController = new friendController()
const LikeController = new likeController()
const CommentController = new commentController()

routes.post('/register',upload.single('photo'), UserController.create)
routes.get('/users',UserController.index)
routes.get('/user/:username',UserController.read)
routes.put('/update/:id',upload.single('photo'),UserController.update)
routes.delete('/user',UserController.delete)

routes.post('/session',SessionController.create)

routes.post('/post',upload.single('photoPost'),PostController.create)
routes.delete('/post/:id',PostController.delete)
routes.get('/post',PostController.index)
routes.get('/user/:username/posts/:id',PostController.read)

routes.post('/user/:idRecipient',FriendRequestController.create)
routes.delete('/friendrequest',FriendRequestController.delete)
routes.get('/friendrequest',FriendRequestController.index)

routes.post('/friends',FriendController.create)
routes.get('/friends',FriendController.index)
routes.delete('/friends',FriendController.delete)

routes.post('/comment',upload.single('photoComment'),CommentController.create)
routes.get('/comment',upload.single('photoComment'),CommentController.index)
routes.delete('/comment',CommentController.delete)

routes.post('/like',LikeController.create)
routes.get('/like',LikeController.index)
routes.delete('/like',LikeController.delete)

export default routes