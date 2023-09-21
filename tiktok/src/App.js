import {useState} from 'react'
import Api from './Api';


// const courses=[
//   {
//     id:1,
//     name:'HTML, CSS'
//   },
//   {
//     id:2,
//     name:'javaScript'
//   },
//   {
//     id:3,
//     name:'ReactJs'
//   }
// ]

// function App() {

//   const [checked,setChecked] = useState([])
//   const handleCheck =(id)=>{
//     setChecked(prev =>{
//       const isChecked = checked.includes(id)
//       if(isChecked){
//         return checked.filter(item => item !== id)
//       }else{
//         return [...prev,id]
//       }
//     })
//   }
//   const handleSubmit =()=>{
//     console.log({id:checked})
//   }
  
//   return (
//     <div className="App" style={{padding:50}}>
//       {courses.map(course=>(
//           <div key={course.id}>
//           <input 
//             type="checkbox"
//             checked={checked.includes(course.id)}
//             onChange={()=>handleCheck(course.id)}
//           />
//           {course.name}
//         </div>
//         ))}
//       <button onClick={handleSubmit}>Register</button>
//     </div>
//   );
// }
// function App(){
  
//   const storageJobs = JSON.parse(localStorage.getItem('jobs'))
//   const [job,setJob] = useState('')
//   const[jobs,setJobs]= useState(storageJobs ?? [])
//   // const handleSubmit = ()=>{
//   //   setJobs((prev)=>[...prev,job])
//   // }
//   function handleSubmit(){
//     setJobs((prev)=>{
//       const newJobs = [...prev,job]
//       const jsonJob = JSON.stringify(newJobs)
//       localStorage.setItem('jobs',jsonJob)
//       return newJobs 
//     }
//     )
//     setJob('')
//   }
//   return (
//     <div>
//      <input type="text"
//         value={job}
//         onChange={(e)=> setJob(e.target.value)}
//      />
//      <button
//       onClick={handleSubmit}
//      >add
//      </button>
//      <ul>
//        {
//         jobs.map((job,index)=>
//         <li key={index}>{job}</li>)
//       }
//       </ul>
//     </div>
    
//   )
// }

// import Excersice from './Excersice';
//facke comment
function emitComment (id){
  setInterval(()=>{
    window.dispatchEvent(
      new CustomEvent (`lesson-${id}`,{detail:`nội dung comment của lessons ${id}`})
    )
  },2000)
}
emitComment(1)
emitComment(2)
emitComment(3)
function App(){
  const[show,setShow] = useState(false)
  return (
    <div style={{padding:20}}>
      <button onClick={()=>setShow(!show)}>Toggle</button>
      <br />
     {show&&<Api/>}
     
    </div>
  )
}
export default App;
