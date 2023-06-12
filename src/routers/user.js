import express from 'express';
import { signIn, signUp,getUsers,deleteUser } from '../controllers/user';

const router = express.Router();

router.post('/signin', signIn);
router.post('/signup', signUp);
router.get('/users', getUsers);
router.delete('/users/:id', deleteUser);


export default router;