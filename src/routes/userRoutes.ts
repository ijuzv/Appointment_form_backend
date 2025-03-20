import express, { Request, Response } from 'express';
import {
  createUser,
  getUsers,
  getUserById,
  updateUser,
  deleteUser
} from '../controllers/userController';
import { validateUser } from '../middlewares/validateUser';

const router = express.Router();


router.get('/health', (req: Request, res: Response) => {
  res.status(200).json({ status: 'OK', message: 'Server is running fine!' });
});

router.route('/').post(validateUser, createUser).get(getUsers);
router.route('/:id').get(getUserById).patch(validateUser, updateUser).delete(deleteUser);

export default router;