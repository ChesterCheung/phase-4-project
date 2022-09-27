import React, {useState, useEffect} from 'react'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Login from './components/Login'
import Home from './components/Home'
import NurseList from './components/NurseList'
import AssignmentList from './components/AssignmentList'
import AssignmentForm from './components/AssignmentForm'
import NavBar from './components/NavBar'


const App = () => {
  const [user, setUser] = useState(null);

  useEffect(()=>{
    fetch("/me").then((response)=> {
      if (response.ok) {
        response.json().then((user) => setUser(user))
      }
    })
  }, []);

  if(!user) return <Login onLogin={setUser}/>

  return (
    <div>
    <Router>
      <NavBar user={user} setUser={setUser} />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/nurses" element={<NurseList />}/>
        <Route path="/assignments" element={<AssignmentList />}/>
        <Route path="/assignments/new" element={<AssignmentForm />}/>
      </Routes>
  </Router>
  </div>
  )
}

export default App