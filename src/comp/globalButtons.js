import React from "react";

const GlobalButtons = ({loadTodo, saveTodo}) => {
    const globalButtonsContainer = {
        margin: "5px",
        paddingLeft: "5px"
    }
    const marginLeft = {
        marginLeft: "5px"
    }

    return(
        <div
            style = {globalButtonsContainer}
        >
            <button
                    onClick = {loadTodo}
                    style = {marginLeft}
            >
                Load
            </button>
            
            <button
                    onClick = {saveTodo}
                    style = {marginLeft}
            >
                Save
            </button>
        </div>
    )
}

export default GlobalButtons