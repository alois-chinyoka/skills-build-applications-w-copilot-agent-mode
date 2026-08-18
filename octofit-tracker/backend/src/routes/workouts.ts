import { Router } from 'express';
import Workout from '../models/Workout';

const router = Router();

router.get('/', async (_request, response) => {
  const workouts = await Workout.find();
  response.json(workouts);
});

router.get('/:id', async (request, response) => {
  const workout = await Workout.findById(request.params.id);
  if (!workout) {
    response.status(404).json({ error: 'Workout not found' });
    return;
  }
  response.json(workout);
});

export default router;
