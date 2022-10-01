import React, {useState, useEffect} from 'react'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Login from './components/Login'
import Home from './components/Home'
import HospitalList from './components/HospitalList'
import AssignmentList from './components/AssignmentList'
import AssignmentForm from './components/AssignmentForm'
import NavBar from './components/NavBar'
import HospitalForm from './components/HospitalForm';

const App = () => {
  const [user, setUser] = useState(null);
  const [hospitals, setHospitals] = useState([])
  
  useEffect(() => {
    fetch("/hospitals")
    .then(resp => resp.json())
    .then(data => setHospitals(data))
  }, [])

  useEffect(() => {
    fetch("/me").then((response)=> {
      if (response.ok) {
        response.json().then((u) => setUser(u.username))
      }
    })
  }, []);

  const addHospital = (hospital) => {
    setHospitals([...hospitals, hospital])
  }

  if(!user) return <Login onLogin={setUser}/>

  return (
    <div>
    <Router>
      <NavBar user={user} setUser={setUser} />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/hospitals" element={<HospitalList hospitals={hospitals} setHospitals={setHospitals} />}/>
        <Route path="/addhospitals" element={<HospitalForm addHospital={addHospital} />}/>
        <Route path="/assignments" element={<AssignmentList />}/>
        <Route path="/assignments/new" element={<AssignmentForm />}/>
      </Routes>
  </Router>
  </div>
  )
}

export default App