import { useEffect ,useState} from "react"
// 1.update Dom
// 2.Call api
// 3. Listen DOM event
//   - scroll
//   - Resize.
// 4. clearn up
//   - remove listener, 
//   - unsubscribe
//   - clearn timer
  
// 1.useEffect(callback)
// - nó còn gọi callback sau khi component thêm element vào DOM
// - gọi callback khi component  re-render 
// 2. useEffect(callback,[])
//  - chỉ gọi callback 1 lần sau khi component mounted
// 3. useEffect(callback,[deps])
//  - callback sẽ gọi lại mỗi khi dependence thay đổi
//--------------------------------------
// . callback luôn luôn được gọi sau khi component đc mounted 
// . clearn up funtion luôn được gọi trước khi component đc unmount
const tabs = ['posts','comments','albums']
function Content(){

  const [posts,setPost]= useState([])
  const [style,setStyle] = useState('posts')
  const[goShowToTop,setGoShowToTop] = useState(false)
  

  //const [product,setProduct]= useState([])
 
  const handleScrollTop = ()=>{
      if(window.scrollY!==0){
        setTimeout(()=>{
          window.scrollTo(0,window.scrollY-35)
          handleScrollTop()
        },10)}
  }
  useEffect(()=>{
    fetch(`https://jsonplaceholder.typicode.com/${style}`)
    .then((reponse)=>reponse.json())
    .then((posts)=>{
      setPost(posts)
    })
  },[style])
  useEffect(()=>{
    const handleScroll = ()=>{
      if(window.scrollY>=200){
        setGoShowToTop(true)
      }else{
        setGoShowToTop(false)
      }
    }
    window.addEventListener('scroll',handleScroll)
    return ()=>{
    window.removeEventListener('scroll',handleScroll)
    }
  })
  return (
    <div>
      
      { tabs.map((tab)=>
          <button
           key={tab}
           style={style === tab ? {
             color:'#fff',
             backgroundColor:'#333'
           }:{}}
          onClick={()=>setStyle(tab)}
           >{tab}
           </button>)
      }

     
      <ul>
        {posts.map((post)=> (<li key={post.id}>{post.title||post.name}</li>))}
      </ul>
      {
      goShowToTop &&(
        <button
          onClick={handleScrollTop}
          style={{position:'fixed',right:0,bottom:20}}
        >
        Go to top
        </button>
      )}
      
    </div>
  )
}
export default Content