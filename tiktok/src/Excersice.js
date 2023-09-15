import { useEffect, useRef, useState } from "react";
// useEffect:
// 1. cập nhật lại state.
// 2, cập nhật DOM
// 3. render lại UI
// 4. gọi clern up khi desp thay đổi.
// 6. gọi useEffect callback 
// useLayoutEffect
// 1. cập nhật lại trạng thái.
// 2. cập nhật lại DOM.
// 3. gọi clern up khi desp thay đổi. (Sync)
// 4. gọi useEffect callback (Sync)
// 5.render lại UI
function Excersice(){
  const [inCrements,setInCrement] = useState(0)
  const [inputValue,setInputValue] = useState('')
  const[resize,setResize]= useState('')
  const[avatar,setAvatar]= useState()
  const [title,setTitle] = useState('')
  console.log(inCrements)
  useEffect(()=>{
    function handleResize (){
      setResize(window.innerWidth)
    }
    window.addEventListener('resize',handleResize)
    return ()=>{
      window.removeEventListener('resize',handleResize)
    }
  },[])
  useEffect(()=>{
    return ()=>{
      avatar && URL.revokeObjectURL(avatar.preView)
    }
  },[avatar])
  const handlePreviewAvatar = (e)=>{
    const file = e.target.files[0]
    file.preView = URL.createObjectURL(file)
    setAvatar(file)
  }
  const ref = useRef()
  const ref2 = useRef()
  const [counter,setCounter] = useState(60)
   useEffect(()=>{
    ref2.current = counter
  },[counter])
  const handleStartCount = ()=>{
   ref.current= setInterval(()=>{setCounter(prev=> prev-1)}, 1000);
  }
  const handleStopCouter=()=>{
    clearInterval(ref.current)
  }
  console.log(counter,ref2.current)

  return(
    <>
     <input 
      type="text"
      value={title}
      onChange={(e)=>setTitle(e.target.value)} 
      />
      <p>{counter}</p>
      <button onClick={handleStartCount}>start</button>
      <button onClick={handleStopCouter}>stop</button>
      <div>
        <input 
        type="file" 
        onChange={handlePreviewAvatar}
      />
      {
        avatar&&(
          <img src={avatar.preView} alt="" width="80%" />
        )}
        <br />
      <input
        value={inputValue}
        onChange={(e)=>setInputValue(e.target.value)
        }
      />
      <p>iniput tex : {inputValue}</p>
      </div>
      <h1>{inCrements}</h1>
      <button onClick={()=>{setInCrement(inCrements+1)}}>Increments</button>
      <button
      
      >togge</button>
      <p>resize : {resize}</p>

    </>
  )
}
export default Excersice