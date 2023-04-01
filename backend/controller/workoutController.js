const Workout=require('../models/workoutmodel')
const mongoose=require('mongoose')

//get a workout
const allWorkout=async(req,res)=>{
    const workouts=await Workout.find({}).sort({createdAt:-1})

    res.status(200).json(workouts)
}
//get a single workout
const singleWorkout=async(req,res)=>{
    const {id}=req.params
    if(!mongoose.isValidObjectId(id)){
        return res.status(404).json({error:'wrong id'})
    }
    const workout=await Workout.findById(id)

    if(!workout){
        return res.status(404).json('Not found the workout')
    }
    else{
        res.status(200).json(workout)
    }
}

//create a workout
const createWorkout= async(req,res) =>{

    const {title,reps,load} =req.body

    let emptyFields = []

    if (!title) {
      emptyFields.push('title')
    }
    if (!load) {
      emptyFields.push('load')
    }
    if (!reps) {
      emptyFields.push('reps')
    }
    if (emptyFields.length > 0) {
      return res.status(400).json({ error: 'Please fill in all fields', emptyFields })
    }

    // add to the database
    try {
      const workout = await Workout.create({ title, load, reps })
      res.status(200).json(workout)
    } catch (error) {
      res.status(400).json({ error: error.message })
    }
}
//Delete a new workout
const deleteWorkout=async(req,res)=>{
    const {id}=req.params
    if(!mongoose.isValidObjectId(id)){
        return res.status(404).json({error:'wrong id'})
    }

    const workout=await Workout.findOneAndDelete({_id:id})

    if(!workout){
        return res.status(404).json('Not found the workout')
    }
    res.status(200).json(workout)

}
//update a workout
const updateWorkout=async(req,res)=>{
    const {id}=req.params
    if(!mongoose.isValidObjectId(id)){
        return res.status(404).json({error:'wrong id'})
    }

    const workout=await Workout.findOneAndUpdate({_id:id},{
        ...req.body
    })
    
    if(!workout){
        return res.status(404).json('Not found the workout')
    }
    res.status(200).json(workout)

}

module.exports={
    createWorkout,singleWorkout,allWorkout,deleteWorkout,updateWorkout
}