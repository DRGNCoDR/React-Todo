import React from "react";
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import ChecklistIcon from '@mui/icons-material/Checklist';
import SaveIcon from '@mui/icons-material/Save';

const GlobalButtons = ({loadTodo, saveTodo, completeTodo, removeTodo}) => {
    const globalButtonsContainer = 
    {
        margin: "5px",
        paddingLeft: "5px",
        display: "flex",
        justifyContent: "space-around"
    }

    return(
        <div
            style = {globalButtonsContainer}
        >
            <Button 
                variant="outlined"
                onClick = {loadTodo}                
            >
                Load
            </Button>
            
            <Button 
                variant="outlined"
                color="success"
                startIcon={<SaveIcon />}     
                onClick = {saveTodo}                
            >
                Save
            </Button>
            
            <Button 
                variant="outlined"
                startIcon={<ChecklistIcon />}         
                onClick = {() => completeTodo(true)}
            >
                Complete All
            </Button>
            
            <Button 
                variant="outlined"
                color="error"
                startIcon={<DeleteIcon />}
                onClick = {() => removeTodo(0, true)}                
            >
                Delete All
            </Button>
        </div>
    )
}

export default GlobalButtons