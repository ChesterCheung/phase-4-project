import React from 'react'
import Grid  from '@mui/material/Grid'
import MyAssignmentCard from './MyAssignnmentCard'

const MyAssignmentList = ({user}) => {

  const myAssignmentCards = user.assignments
  const myAssignments = myAssignmentCards.map(assignment => <ul><MyAssignmentCard id={assignment} assignment={assignment}/></ul>)

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

