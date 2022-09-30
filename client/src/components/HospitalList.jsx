import React, {useState, useEffect} from 'react'

const HospitalList = () => {
  const [hospitals, setHospitals] = useState([])

  useEffect(() => {
    fetch("/hospitals")
    .then(resp => resp.json())
    .then(data => setHospitals(data))
  }, [])


  return (
    <div>
      {hospitals.map((h) => h.name)}
    </div>
  )
}

export default HospitalList
