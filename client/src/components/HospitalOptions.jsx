import React from 'react'

const HospitalOptions = ({hospital}) => {
  return (
    <option value={hospital.id}>{hospital.name}</option>
  )
}

export default HospitalOptions