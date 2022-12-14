import React, {useState, useEffect} from 'react'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Login from './components/Login'
import Home from './components/Home'
import HospitalList from './components/HospitalList'
import AssignmentList from './components/AssignmentList'
import AssignmentForm from './components/AssignmentForm'
import NavBar from './components/NavBar'
import HospitalForm from './components/HospitalForm';
import MyAssignmentList from './components/MyAssignmentList'

const App = () => {
  const [user, setUser] = useState([]);
  const [hospitals, setHospitals] = useState([])
  const [assignments, setAssignments] = useState([])
  const [updatedAssignment, setUpdatedAssignment] = useState(null)

  useEffect(() => {

    fetch("/me").then((response)=> {
      if (response.ok) {
        response.json().then((u) => setUser(u))
      }
    })

    fetch("/hospitals")
    .then(resp => resp.json())
    .then(data => setHospitals(data))
  }, [])

  const addHospital = (hospital) => {
    setHospitals([...hospitals, hospital])
  }

  const editAssign = (updatedEval) => {
    const update = assignments.map(assignment => {
      if (assignment.id === updatedEval.id){
        return updatedEval
      } else {
        return assignment
       }
    })
    setAssignments(update)
    setUpdatedAssignment(true)
  }

  useEffect(()=>{
    fetch("/assignments")
    .then(resp => resp.json())
    .then(data => setAssignments(data))
  }, [updatedAssignment])

  const addAssignment = (assign) => {
    setAssignments([...assignments, assign])
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
        <Route path="/assignments" element={<AssignmentList assignments={assignments} user={user} />}/>
        <Route path="/myassignments" element={<MyAssignmentList editAssign={editAssign} updatedAssignment={updatedAssignment} setUpdatedAssignment={setUpdatedAssignment} user={user}/>}/>
        <Route path="/assignments/new" element={<AssignmentForm addAssignment={addAssignment} hospitals={hospitals}/>}/>
      </Routes>
  </Router>
  </div>
  )
}

export default App
