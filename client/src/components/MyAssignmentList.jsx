import React from 'react'
import Grid  from '@mui/material/Grid'
import MyAssignmentCard from './MyAssignnmentCard'
import { useEffect, useState } from 'react'

const MyAssignmentList = ({deleteAssignment}) => {
  const [user, setUser] = useState([])
  useEffect(() => {

    fetch("/testing")
    .then(resp => resp.json())
    .then(data => setUser(data))
  }, [])

  const deleteMyAssignment = (assign) => {
    setUser(user.filter(a => a.id !== assign.id))
  }

  const myAssignments = user.map(assignment => <ul key={assignment.id} ><MyAssignmentCard id={assignment} deleteMyAssignment={deleteMyAssignment} deleteAssignment={deleteAssignment} assignment={assignment}/></ul>)

  return (
    <div>
      <h2 align="center"> My Assignments</h2>
        <Grid container spacing={2}>
        {myAssignments}
        </Grid>
    </div>
  )
}

export default MyAssignmentList

