import React from 'react'
import Grid  from '@mui/material/Grid'
import MyAssignmentCard from './MyAssignnmentCard'
import { useEffect, useState } from 'react'

const MyAssignmentList = ({editAssign, updatedAssignment, setUpdatedAssignment}) => {
  const [user, setUser] = useState([])
 

  useEffect(() => {

    fetch("/myassignments")
    .then(resp => resp.json())
    .then(data => setUser(data))
  }, [updatedAssignment])

  const myAssignments = user.map(assignment => <ul key={assignment.id} ><MyAssignmentCard editAssign={editAssign} setUpdatedAssignment={setUpdatedAssignment} id={assignment} assignment={assignment}/></ul>)

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

