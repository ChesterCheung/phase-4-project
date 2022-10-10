import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import {useState} from 'react'
import { useNavigate } from 'react-router-dom';

const AssignmentForm = ({hospitals}) => {
  const [lengthOfContract, setLengthOfContract] = useState("")
  const [weeklyPay, setWeeklyPay] = useState("")
  const [evaluation, setEvaluation] = useState("")
  const [hospitalId, setHospitalId] = useState("")

  const options = hospitals.map((hospital) => hospital.name);


  return (
      <div>
        <form align="center" >
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
              <Autocomplete
                    value={hospitals.id}
                    onChange={(event, newValue) => {
                      setHospitalId(newValue);
                    }}
                    id="hospital-name"
                    options={options}
                    sx={{ width: 300 }}
                    renderInput={(params) => <TextField {...params} label="Hospital" />}
              />
          </Box>
        <input type="submit" value="Add"></input>
        </form>
    </div>
  )
}

export default AssignmentForm


