import React from "react";

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
            <button
                onClick = {loadTodo}                
            >
                Load
            </button>
            
            <button
                onClick = {saveTodo}                
            >
                Save
            </button>
            
            <button                
                onClick = {() => completeTodo(true)}
            >
                Complete All
            </button>
            
            <button
                onClick = {() => removeTodo(0, true)}
            >
                Delete All
            </button>
        </div>
    )
}

export default GlobalButtons