import { Router } from 'express';
import Activity from '../models/Activity';

const router = Router();

router.get('/', async (_request, response) => {
  const activities = await Activity.find();
  response.json(activities);
});

router.get('/:id', async (request, response) => {
  const activity = await Activity.findById(request.params.id);
  if (!activity) {
    response.status(404).json({ error: 'Activity not found' });
    return;
  }
  response.json(activity);
});

export default router;
