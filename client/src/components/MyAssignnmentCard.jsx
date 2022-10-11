import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import {useState} from "react"
import EditAssignment from './EditAssignment';

export default function MyAssignmentCard({editAssign, assignment, setUpdatedAssignment}) {
  const [edit, setEdit] = useState(false)

  const onDelete = () => {
    fetch(`/assignments/${assignment.id}`, {
      method: "DELETE",
    })
    .then(data => setUpdatedAssignment(data))
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
          {edit ? <EditAssignment setEdit={setEdit} editAssign={editAssign} assignment={assignment} /> :
          <Typography variant="body2">
            {assignment.evaluation}
          </Typography>
          }
          <CardActions>
          <Button onClick={onDelete} size="small">Delete</Button>
          <Button onClick={() =>setEdit((isEditing) => !isEditing)} size="small">Edit Evaluation</Button>
        </CardActions>
        </CardContent>
    
      
    </Card>
  );
}