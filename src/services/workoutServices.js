const Workout = require('../database/Workout');

module.exports = {
  getAllWorkouts: async () => {
    const allworkouts = Workout.getAllWorkouts();

    return allworkouts;
  },
  getOneWorkout: async () => {
    return;
  },
  createOneWorkout: async () => {
    return;
  },
  updateOneWorkout: async () => {
    return;
  },
  deleteOneWorkout: async () => {
    return;
  },
};
