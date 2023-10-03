import React from "react";

function List  (
    {
        todos,
        completeTodo,
        editTodo,
        removeTodo
    }
) 
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

    return (
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
                            padding: "2px"
                        }
                    }
                    key = {index.toString()}
                >
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

                    <input
                        type = "checkbox"
                        value = {todo.complete}
                        checked = {todo.complete}
                        onChange = {
                            () => completeTodo(false, index)
                        }
                    />

                    <span style = {
                            {
                                pad2,
                                textDecoration: todo.complete ? "line-through" : ""
                            }
                        }
                    >
                        {todo.title}
                    </span>

                    <span
                        style = {pad_L_5}
                    >
                        <button
                            onClick={() => editTodo(index)}
                        >
                            Edit
                        </button>
                    </span>

                    <div
                        style = {
                            {
                                pad_L_5,
                                textAlign:"center"
                            }
                        }
                    >
                        <button
                            onClick = {
                                () => removeTodo(index)
                            }
                            style = {
                                {
                                    width:"35%"
                                }
                            }
                        >
                            X
                        </button>
                    </div>
                </li>
                ))
            }
        </ul>
    )
}

export default List