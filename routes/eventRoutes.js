const { Router } = require('express');
const Event = require('../models/Event');
const router = Router();

router.get('/events', async (req, res) => {
  const events = await Event.find({});

  res.json(events);
});

router.post('/events', async (req, res) => {
  const { title, date } = req.body;

  const event = new Event({
    title,
    date,
  });

  await event.save();

  res.json({ status: 'ok', text: 'event saved' });
});

router.delete('/events/:id', async (req, res) => {
  const eventId = req.body.id;

  await Event.findByIdAndDelete(eventId);
  res.status(204).send();
});

module.exports = router;
