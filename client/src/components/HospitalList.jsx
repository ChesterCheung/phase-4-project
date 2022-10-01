import React from 'react'
import HospitalCard from './HospitalCard'
import Grid  from '@mui/material/Grid'

const HospitalList = ({hospitals, setHospitals}) => {

  const hospitalCards = hospitals.map(hospital => <ul><HospitalCard id={hospital} hospital={hospital}/> </ul>)

  return (
    <div>
      <h2 align="center">Hospitals</h2>
        <Grid container spacing={2}>
          {hospitalCards}
        </Grid>
    </div>
  )
}

export default HospitalList
