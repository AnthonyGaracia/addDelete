import { useEffect, useState } from 'react'
import axios from 'axios'
import AllComments from './components/AllComments'
import HomePage from './components/HomePage'
import NavBar from './components/NavBar'
import { Routes, Route } from 'react-router-dom'
import './App.css'

//step 1 set up useEffect and useState
function App() {

  const [allComments, setAllComments] = useState([])
  
  useEffect(() => {
    const fetchComments = async() => {
    const {data} = await axios.get('https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/comments')
    setAllComments(data)
    //forgot setAllComments
  }
  fetchComments()
  }, [])
  return (
    <div>
      <NavBar/>
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/comments' element={  
        <AllComments allComments={allComments}/>}/>
      </Routes>
     
 
    </div>

  )
}

export default App
