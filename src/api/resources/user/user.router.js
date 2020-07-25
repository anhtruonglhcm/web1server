import express from 'express';
import passport from 'passport';
import userController from './user.controller';

export const userRouter = express.Router();
userRouter.post('/signup', userController.singup);
userRouter.post('/login', userController.singin);
userRouter.post('/test', passport.authenticate('jwt', { session: false }), userController.test);
