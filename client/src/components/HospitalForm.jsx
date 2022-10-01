import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {useState} from 'react'
import { useNavigate } from 'react-router-dom';

export default function HospitalForm({addHospital}) {
  const [name, setName] = useState("")
  const [location, setLocation] = useState("")
  const [description, setDescription] = useState("")
  const navigate = useNavigate()

  const handleSubmit = (e)=>{
    e.preventDefault()
    fetch("/addhospital", {
        method:"POST",
        headers: {"Content-Type": "application/json",},
        body: JSON.stringify({name, location, description}),
    })
    .then((r) => r.json())
    .then((hosp)=> addHospital(hosp))
    navigate("/hospitals")
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
        <Box align="center"
        sx={{
            '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
        >
            <h2>Add Hospital</h2>
            <TextField
            id="hospitalName"
            label="Name"
            onChange={e => setName(e.target.value)}
            value={name}
            />
            <TextField
            id="hospitalLocation"
            label="Location"
            onChange={(e) => setLocation(e.target.value)}
            value={location}
            />
            <TextField
            id="hospitalDescription"
            label="Description"
            onChange={(e) => setDescription(e.target.value)}
            value={description}
            />
        </Box>
        <input type="submit" value="Add"></input>
        </form>
    </div>
  );
}
