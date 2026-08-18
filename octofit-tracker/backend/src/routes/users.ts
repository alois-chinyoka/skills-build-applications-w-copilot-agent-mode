import { Router } from 'express';
import User from '../models/User';

const router = Router();

router.get('/', async (_request, response) => {
  const users = await User.find();
  response.json(users);
});

router.get('/:id', async (request, response) => {
  const user = await User.findById(request.params.id);
  if (!user) {
    response.status(404).json({ error: 'User not found' });
    return;
  }
  response.json(user);
});

export default router;
