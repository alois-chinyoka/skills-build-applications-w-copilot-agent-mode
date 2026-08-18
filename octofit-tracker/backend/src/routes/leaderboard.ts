import { Router } from 'express';
import Leaderboard from '../models/Leaderboard';

const router = Router();

router.get('/', async (_request, response) => {
  const entries = await Leaderboard.find().sort({ rank: 1 });
  response.json(entries);
});

router.get('/:id', async (request, response) => {
  const entry = await Leaderboard.findById(request.params.id);
  if (!entry) {
    response.status(404).json({ error: 'Leaderboard entry not found' });
    return;
  }
  response.json(entry);
});

export default router;
