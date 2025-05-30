import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddBlog from './components/AddBlog'
import Navbar from './components/Navbar'
import {Routes,Route} from 'react-router-dom'
import Home from './components/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
          {/* <AddBlog/> */}
          {/* <Home/> */}
          <Navbar/>
           <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/r" element={<AddBlog/>}/>
           </Routes>
      </div>
     
    </>
  )
}

export default App
