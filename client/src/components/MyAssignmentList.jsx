import React from 'react'
import Grid  from '@mui/material/Grid'
import MyAssignmentCard from './MyAssignnmentCard'

const MyAssignmentList = ({user, deleteAssignment}) => {

  const myAssignmentCards = user.assignments
  const myAssignments = myAssignmentCards.map(assignment => <ul key={assignment.id} ><MyAssignmentCard id={assignment} deleteAssignment={deleteAssignment} assignment={assignment}/></ul>)

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

