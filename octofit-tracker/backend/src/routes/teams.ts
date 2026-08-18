import { Router } from 'express';
import Team from '../models/Team';

const router = Router();

router.get('/', async (_request, response) => {
  const teams = await Team.find();
  response.json(teams);
});

router.get('/:id', async (request, response) => {
  const team = await Team.findById(request.params.id);
  if (!team) {
    response.status(404).json({ error: 'Team not found' });
    return;
  }
  response.json(team);
});

export default router;
