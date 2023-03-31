const express=require('express')
const {createWorkout,singleWorkout,allWorkout,deleteWorkout, updateWorkout}=require('../controller/workoutController')
const router=express.Router()

//get workout
router.get('/',allWorkout)

//Get a single workout
router.get('/:id',singleWorkout)

//POST a new workout
router.post('/',createWorkout)

//Delete a new workout
router.delete('/:id',deleteWorkout)

//Update a new workout
router.patch('/:id',updateWorkout)
module.exports=router