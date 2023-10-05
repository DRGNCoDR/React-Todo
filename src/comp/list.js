import React from "react";

function List  (
    {
        todos,
        completeTodo,
        editTodo,
        removeTodo
    }) 
{
    const todoList = {
        listStyleType: "none",
        padding: "2px",
        margin: "5px",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "flex-start"
    }
    const pad2 = {
        padding: "5px"
    }
    const pad_L_5 ={
        paddingLeft: "2px"
    }
    const todoHeader = {
        display: "flex",
        justifyContent: "space-around"
    }

    return    (
        <ul
            style = {todoList}
        >
            {
                todos.map((todo, index) => (
                <li
                    style = {
                        {
                            backgroundColor: todo.complete ?
                                "darkolivegreen" :
                                "aquamarine",
                            border: "4px solid black",
                            margin: "1px",
                            padding: "2px",
                            minWidth: "200px"
                        }
                    }
                    key = {index.toString()}
                >
                    
                        <div style={todoHeader}>
                            <span>
                                <input
                                    type = "checkbox"
                                    value = {todo.complete}
                                    checked = {todo.complete}
                                    onChange = {
                                        () => completeTodo(false, index)
                                    }
                                />
                            </span>
                            <span>
                            <span style = {
                                {
                                    pad2,
                                    textDecoration: todo.complete ? "line-through" : ""
                                }
                            }
                            >
                                {todo.title}
                            </span>
                        </span>
                        <span>
                            <button
                                onClick={() => editTodo(index)}
                            >
                                Edit
                            </button>
                        </span>
                        <span>
                                <button
                                    onClick = {
                                        () => removeTodo(index)
                                    }                                   
                                >
                                    X
                                </button>
                        </span>
                    </div>
                    <p>
                        <em>
                            Created on: {todo.createdDate}
                        </em>
                    </p>

                    <p
                        style = {
                            {
                                display : todo.complete ? "" : "none"
                            }
                        }
                    >                        
                        <em>
                            Completed on: {todo.completedDate}
                        </em>
                    </p>                    
                </li>
                ))
            }
        </ul>
    )
}

export default List