import React from "react";
import Button from '@mui/material/Button';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';

const Add = (
    {
        todos,
        addTodo
    }
) => {
    const addContainer = 
    {        
        padding: "5px",
        margin: "5px"
    }
    const marginLeft =
    {        
        marginLeft: "5px"
    }

    return (
        <div
            style = {addContainer}
        >
            <input
                type="text"
                placeholder='Enter new Todo'
                value= {todos.title}
                id="Title"
            />

            <Button
                variant="outlined"
                color="success"
                startIcon={<AddOutlinedIcon />}     
                style = {marginLeft}
                onClick = {addTodo}
            >
                Add
            </Button>
        </div>
    )
}
export default Add