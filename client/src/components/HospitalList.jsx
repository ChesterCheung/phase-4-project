import React, {useState, useEffect} from 'react'
import HospitalCard from './HospitalCard'

const HospitalList = () => {
  const [hospitals, setHospitals] = useState([])

  useEffect(() => {
    fetch("/hospitals")
    .then(resp => resp.json())
    .then(data => setHospitals(data))
  }, [])


  return (
    <div>
      {hospitals.map(() => <li><HospitalCard hospitals={hospitals}/> </li>)}
    </div>
  )
}

export default HospitalList
