import { useReducer} from "react";
const inital ={
  name:'',
  age:42,
  check:true
}
const SET_NAME = 'set_name'
const INCREAMENT= 'increament'

function reduce (state,action){
  switch (action.type) {
    case SET_NAME:
      return {
        ...state,name:action.value
      } 
      case INCREAMENT:
        return {
         name:state.name,
         age: state.age+1
        }
    default:
      break;
  }

}
 function Examl (){
  const [state,dispath] = useReducer(reduce,inital)
  const {name,age} = state
  return (
    <>
      <input 
        value={name}
        onChange={(e)=>dispath({type:SET_NAME,value:e.target.value})}
      />
      <br />
      <button
       onClick={()=>dispath({type:'increament'})}
      >increment</button>
      <br />
      <p>Hello,{name}. You are {age}</p>
    </>
  )
}


export default Examl