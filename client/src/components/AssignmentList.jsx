import React from 'react'
import Grid  from '@mui/material/Grid'
import AssignmentCard from './AssignmentCard'

const AssignmentList = ({assignments, user}) => {

  const assignmentCards = assignments.map(assignment => <ul><AssignmentCard id={assignment} assignment={assignment} /> </ul>)

  return (
    <div>
      <h2 align="center">Assignments</h2>
        <Grid container spacing={2}>
          {assignmentCards}
        </Grid>
    </div>
  )
}

export default AssignmentList
