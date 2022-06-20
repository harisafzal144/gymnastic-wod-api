const express = require('express');
const workoutController = require('../../controllers/workoutController');

const router = express.Router();
//get all workouts
router.get('/', workoutController.getAllWorkouts);
//get single workout based on id
router.get('/:workoutId', workoutController.getOneWorkout);

//create a new workout
router.post('/', workoutController.createNewWorkout);
//update specified_by_id workout
router.patch('/:workoutId', workoutController.updateOneWorkout);
//delete  specified_by_id workout
router.delete('/:workoutId', workoutController.deleteOneWorkout);

module.exports = router;
