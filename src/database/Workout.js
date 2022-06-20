const DB = require('./db.json');

module.exports = {
  getAllWorkouts: () => {
    return DB.workouts;
  },
};
