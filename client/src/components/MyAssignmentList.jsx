import React from 'react'
import Grid  from '@mui/material/Grid'
import MyAssignmentCard from './AssignmentCard'

const MyAssignmentList = ({assignments}) => {

  const assignmentCards = assignments.map(assignment => <ul><MyAssignmentCard id={assignment} assignment={assignment}/> </ul>)

  return (
    <div>
      <h2 align="center">Assignments</h2>
        <Grid container spacing={2}>
          {assignmentCards}
        </Grid>
    </div>
  )
}

export default MyAssignmentList
