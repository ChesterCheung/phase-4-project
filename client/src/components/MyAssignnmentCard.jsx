import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


export default function MyAssignmentCard({assignment}) {

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
      </CardContent>
    </Card>
  );
}