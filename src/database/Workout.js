const DB = require('./db.json');
const { saveToDatabase } = require('./utils');

module.exports = {
  getAllWorkouts: () => {
    return DB.workouts;
  },

  createNewWorkout: () => {
    const isAlreadyAdded =
      DB.workouts.findIndex((workout) => workout.name === newWorkout.name) > -1;
    if (isAlreadyAdded) {
      return;
    }
    DB.workouts.push(newWorkout);
    saveToDatabase(DB);
    return newWorkout;
  },
};
