import { createContext,useReducer } from "react";

export const WorkoutContext = createContext()


export const WorkoutContextProvider =({children})=>{

    const workoutsReducer=(state,action)=>{
        switch (action.type) {
            case 'SET_WORKOUTS':
              return {
                workouts : action.payload
              }
            case 'CREATE_WORKOUTS':
              return {
                workouts: [action.payload, ...state.workouts]
              }
            default:
              return state
        }
    }

    const [state, dispatch] = useReducer(workoutsReducer,{
        workouts:null
    })

    return(
        <WorkoutContext.Provider value={{...state,dispatch}}>
            {children}
        </WorkoutContext.Provider>
    )
}