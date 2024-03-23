
import './App.css'
import { useSelector } from 'react-redux'

function App() {
  const { counter } = useSelector( state => state.counter )
  
  return (
    <>
      <div>
        
      </div>

      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={ ()=>{} }>
          count is { counter }
        </button>
      </div>
    </>
  )
}

export default App
