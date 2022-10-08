import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';

export default function MyAssignmentCard({assignment, deleteAssignment, deleteMyAssignment}) {

  const onDelete = () => {
  fetch("/assignments/" + assignment.id, {
    method: "DELETE",
  })
  .then(data => {
    deleteAssignment(data)
    if(assignment) {
      deleteMyAssignment(data)
    }
  })
  }

  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          ${assignment.weekly_pay} per week
        </Typography>
        <Typography sx={{ fontSize: 14 }} gutterBottom>
          {assignment.length_of_contract}
        </Typography>
        <Typography sx={{ mb: 1.5 }}>
          {assignment.hospital.name}
        </Typography>
        <Typography variant="body2">
          {assignment.evaluation}
        </Typography>
        <CardActions>
        <Button onClick={onDelete} size="small">Delete</Button>
        <Button size="small">Edit</Button>
      </CardActions>
      </CardContent>
    </Card>
  );
}