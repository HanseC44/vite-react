import { useState } from 'react'
import touchPic from './assets/touch.jpg'
import test1 from './assets/test1.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1 style={{ fontSize: "20px" }}>Hello, world!</h1>
        <img src={touchPic} alt="Logo" width="400" />
      </div>
            <div>
        <h1>Development Board</h1>
        <img src={test1} alt="Logo" width="600" />
      </div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
    </>
  )
}

export default App
