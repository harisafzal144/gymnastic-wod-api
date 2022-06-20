// In src/controllers/workoutController.js

//*** ADD ***
const workoutService = require('../services/workoutServices');

module.exports = {
  getAllWorkouts: async (req, res) => {
    //const workouts = await workouts.find({});
    const allWorkouts = await workoutService.getAllWorkouts();
    console.log(allWorkouts, 'here in controllers');

    res.send({ status: 'OK', data: allWorkouts });
  },
  getOneWorkout: async (req, res) => {
    const allWorkouts = workoutService.getAllWorkouts();
    res.send('Get an existing workout');
  },
  createNewWorkout: async (req, res) => {
    const allWorkouts = workoutService.getAllWorkouts();
    res.send('Create a new workout');
  },
  updateOneWorkout: async (req, res) => {
    const allWorkouts = workoutService.getAllWorkouts();
    res.send('Update an existing workout');
  },
  deleteOneWorkout: async (req, res) => {
    const allWorkouts = workoutService.getAllWorkouts();
    res.send('Delete an existing workout');
  },
};
