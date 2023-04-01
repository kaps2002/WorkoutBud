import { useWorkoutContext } from "../hooks/useWorkoutContext";

//date-fns 
import formatdistancetonow from 'date-fns/formatdistancetonow'

const WorkoutDetails=({workout})=>{
    const {dispatch}=useWorkoutContext()

    const handleClick= async() => {
        console.log("kar rha hoon delete")
        const response= await fetch('/api/workouts/'+workout._id,{
            method:'DELETE'
        }) 

        const json= await response.json()

        if(response.ok){
            dispatch({type:'DELETE_WORKOUTS',payload:json})
        }
    }
    return(
        <div className="workout-details">
            <h4>{workout.title}</h4>
            <p><strong>Load (kg):</strong>{workout.load}</p>
            <p><strong>Reps:</strong>{workout.reps}</p>
            <p>{formatdistancetonow(new Date(workout.createdAt),{addSuffix:true})}</p>
            <span className="material-symbols-outlined" onClick={handleClick}>Delete</span>

        </div>
    )
}

export default WorkoutDetails