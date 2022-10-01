import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


export default function HospitalCard({hospital}) {
  return (
    <div className="container">
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {hospital.name}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
        {hospital.location}
        </Typography>
        <Typography variant="body2">
        {hospital.description}
        </Typography>
      </CardContent>
    </Card>
    </div>
  );
}

