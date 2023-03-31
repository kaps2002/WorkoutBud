import { useEffect,useState } from "react";
import WorkoutDetails from '../components/WorkoutDetails'

const Home = ()=>{
    const [workouts,setworkouts]=useState(null)
    useEffect(()=>{
        const fetchworkouts=async()=>{
            const response= await fetch('/api/workouts')
            const json= await response.json()

            if(response.ok){
                setworkouts(json)
            }
        }
        fetchworkouts()
    },[])
    
    return(
        <div className="home">
            <div className="workouts">
                {workouts && workouts.map((workout)=>(
                    <WorkoutDetails key={workout._id} workout={workout}/>
                ))}
            </div>
        </div>
    )
}

export default Home;