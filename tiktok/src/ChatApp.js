import {useEffect, useState} from'react'
const lessons =[
  {
    id:1,
    name:'Reactjs là gì ? tại sao phải học reactjs'
  },
  {
    id:2,
    name:'SPA là gì'
  },
  {
    id:3,
    name:'around function'
  }
]
function ChatApp() {
  const [lessonId, setLessonTd] = useState(1)
  useEffect(()=>{
      const handeleComent =({detail})=>{
          console.log(detail)
      }
      window.addEventListener(`lesson-${lessonId}`,handeleComent)
      return ()=>{
        window.removeEventListener(`lesson-${lessonId}`,handeleComent)
      }
  },[lessonId])
  return (  
    <ul>
      {lessons.map(lesson =>
      <li
        key={lesson.id}
        style={{
          color: lessonId ===lesson.id? 'red':'#333'
        }}
        onClick={()=>setLessonTd(lesson.id)}
      >
        {lesson.name}
      </li>)}
    </ul>
  );
}

export default ChatApp;