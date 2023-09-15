import {useReducer} from 'react'
const innital = {
  job:'',
  jobs:[]
}
const SET_JOB = 'set_job'
const ADD_JOB ='add_job'
const DELETE_JOB='delete_job'
const setJob = payload=>{
  return {
    type:SET_JOB,
    payload
  }
}
const addJob = payload=>{
  return{
    type:ADD_JOB,
    payload
  }
}
const deleteJob = payload =>{
  return{
    type:DELETE_JOB,
    payload
  }
}

function reduce(state,action){
 
  switch (action.type) {
    case SET_JOB :
       return {
        ...state,
        job:action.payload
       }
       
    case ADD_JOB:
      return {
        ...state,
        jobs:[...state.jobs,action.payload]
      }
  
      case DELETE_JOB:
        const newJobs = [...state.jobs]
        newJobs.splice(action.payload,1)
         return { ...state,jobs:newJobs}
      
    default:
      break;
  }

}

function App2(){
  const[state,dispath]= useReducer(reduce,innital)
  const{job,jobs} =state
  const handleSubmit = ()=>{
    dispath(addJob(job))
  }
  return (
    <>
    <p></p>
    <input
      value={job}
      onChange={e=>{
        dispath(setJob(e.target.value))
      }}
    />
    <button
      onClick={handleSubmit}
    >
      add
    </button>
    <ul>
    {
      jobs.map((job,index)=>(
      
          <li key={index}>{job}
          <span
          onClick={()=>{dispath(deleteJob(index))}}
          >  
          &times;
          </span>
          </li>
      ))
    }
    </ul>
    </>
  )
}
export default App2