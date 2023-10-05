import React from "react";

const Add = ({todos, addTodo}) => {
    const addContainer = {        
        padding: "5px",
        margin: "5px"
    }
    const marginLeft ={        
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

            <button
                style = {marginLeft}
                onClick = {addTodo}
            >
                + Add
            </button>
        </div>
    )
}
export default Add