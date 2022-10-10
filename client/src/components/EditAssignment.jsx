import React, {useState} from 'react'


const EditAssignment = ({assignment, editAssign}) => {
    const [updatedEvaluation, setUpdatedEvaluation] = useState("")
    
    const handleEditForm = () => {
        fetch("/assignments/" + assignment.id, {
            method: "PATCH",
            headers:{
                "Content-Type": "application/json",
        },
        body: JSON.stringify({evaluation: updatedEvaluation})
        })
        .then(resp => resp.json())
        .then(data => editAssign(data))
    }

  return (
    <div sx={{ minWidth: 275 }}> 
            <form onSubmit={handleEditForm}>
                <label> Edit Evaluation:</label>
                <input style={{height:"100px", flexWrap:"wrap"}} type="text" name="edit" id="edit" onChange={(e) => setUpdatedEvaluation(e.target.value)} value={updatedEvaluation}></input>
                <input type="Submit" value="Submit"/>
            </form>
    </div>
  )
}

export default EditAssignment