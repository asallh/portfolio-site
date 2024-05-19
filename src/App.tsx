import { useState } from 'react'
import './App.css'
import Timeline from './components/Timeline'
import { Button } from './components/ui/button'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Timeline />
    </div>
  )
}

export default App
