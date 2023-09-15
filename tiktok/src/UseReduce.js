import { useReducer } from "react"
const innital = 0
const INCREASE = 'up'
const REDUCE = 'down'
function reduce(state, active) {
  switch (active) {
    case INCREASE:
      return state + 1
    case REDUCE:
      return state - 1
    default:
      throw new Error('Invalid action')
  }
}
function Reduce() {

  const [count, dispatch] = useReducer(reduce, innital)
  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => { dispatch(INCREASE) }}>up</button>
      <button onClick={() => { dispatch(REDUCE) }}>down</button>
    </>
  )
}
export default Reduce