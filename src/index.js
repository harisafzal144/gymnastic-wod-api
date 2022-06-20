// In src/index.js
const express = require('express');
//***ADD ***
const v1WorkoutRouter = require('./v1/routes/workoutRoutes.js');

const app = express();
const PORT = process.env.PORT || 3000;

try {
  app.use('/api/v1/workouts', v1WorkoutRouter);
  app.use((req, res, next) => {
    res.status(404).send({ message: 'Not Found' });
  });

  app.listen(PORT, () => {
    console.log(`API is listening on port ${PORT}`);
  });
} catch (error) {
  console.log(error.message, 'error');
}
