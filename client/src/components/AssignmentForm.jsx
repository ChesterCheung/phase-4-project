import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import HospitalOptions from './HospitalOptions';

const AssignmentForm = ({hospitals, addAssignment}) => {
  const [lengthOfContract, setLengthOfContract] = useState("")
  const [weeklyPay, setWeeklyPay] = useState("")
  const [evaluation, setEvaluation] = useState("")
  const [hospitalId, setHospitalId] = useState("")
  const navigate = useNavigate()

  const selectOptions = hospitals.map((hospital) => <HospitalOptions key={hospital.id} hospital={hospital} />);

  const formSubmit = (e) => {
    e.preventDefault()
      fetch("/assignments", {
          method:"POST",
          headers: {"Content-Type": "application/json",},
          body: JSON.stringify({length_of_contract: lengthOfContract,
            weekly_pay: weeklyPay,
            evaluation: evaluation,
            hospital_id: hospitalId}),
      })
      .then((r) => r.json())
      .then((data)=> addAssignment(data))
      navigate("/assignments")
  }
  

  return (
      <div>
        <form align="center" onSubmit={formSubmit}>
          <Box align="center" sx={{'& .MuiTextField-root': { m: 1, width: '25ch' },}}noValidate autoComplete="off">
              <h2>Add Assignment</h2>
              <TextField
              id="assignmentLength"
              label="Length of Contract"
              onChange={e => setLengthOfContract(e.target.value)}
              value={lengthOfContract}
              />
              <TextField
              id="assignmentPay"
              label="Weekly Pay"
              onChange={(e) => setWeeklyPay(e.target.value)}
              value={weeklyPay}
              />
              <TextField
              id="assignmentEvaluation"
              label="Evaluation"
              onChange={(e) => setEvaluation(e.target.value)}
              value={evaluation}
              />
              <select value={hospitalId} onChange={(e)=> setHospitalId(e.target.value)}>
                {selectOptions}
              </select>
          </Box>
        <input type="submit" value="Add"></input>
        </form>
    </div>
  )
}

export default AssignmentForm


