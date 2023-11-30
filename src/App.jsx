import { useState } from 'react'
import './App.css'
import {Routes,Route} from 'react-router-dom'
import GeneralForm from './component/GeneralForm'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<GeneralForm/>}/>
      </Routes>
      </div>
  )
}

export default App
