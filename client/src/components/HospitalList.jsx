import React, {useState, useEffect} from 'react'
import HospitalCard from './HospitalCard'
import Grid  from '@mui/material/Grid'

const HospitalList = () => {
  const [hospitals, setHospitals] = useState([])

  useEffect(() => {
    fetch("/hospitals")
    .then(resp => resp.json())
    .then(data => setHospitals(data))
  }, [])

  const hospitalCards = hospitals.map(hospital => <ul><HospitalCard id={hospital} hospital={hospital}/> </ul>)

  return (
    <div>
      <h1 align="center">Hospitals</h1>
        <Grid container spacing={2}>
          {hospitalCards}
        </Grid>
    </div>
  )
}

export default HospitalList
