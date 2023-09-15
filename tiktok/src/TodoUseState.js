import { useState,useRef } from "react"

function TodoApp (){
const [job,setJob]= useState('')
 const[work,setWork] = useState([])
 const handleAddwork =()=>{
  setWork(prev=>[...prev,job])
  ref.current.focus()
  setJob('')
 }
 const ref = useRef()
  return(
    <>
     <input
      value={job}
      onChange={(e)=>setJob(e.target.value)}
      ref={ref}
     />
     <button
      onClick={handleAddwork}
     >
      add
     </button>
     {
      work.map((wk,index)=>(
        <ul key={index}>
          <li>{wk}</li>
        </ul>
      ))
     }
    </>
     
  )
}
export default TodoApp