import { useState } from "react"


function Form (){
  const [isEditing,setIsEditing] =  useState(false)
  const [name,setName] = useState('nguyen dinh phi')
  const [button,setButton] =useState('Edit')
  let taskContent;
  if (isEditing){
  taskContent = 
    <>
      <input
        value={name}
        onChange={(e)=>setName(e.target.value)}
      />
    </>
  }else{
  taskContent = 
  <>
    {name}
  </>
  }
  return (
    <>
      <label htmlFor="">
        {taskContent}
        <button
         onClick={()=>
          {setIsEditing(!isEditing)
            setButton('Save') 
        }}
        >{button}</button>
        <button
          onClick={()=>{setName('')}}
        >Delete</button>
      </label>
    </>
  )
}
export default Form