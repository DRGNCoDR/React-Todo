import React from "react";
import Checkbox from '@mui/material/Checkbox';

import Button from '@mui/material/Button';
import ClearIcon from '@mui/icons-material/Clear';
import EditIcon from '@mui/icons-material/Edit';
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
                                "rgb(176, 206, 178)" :
                                "#e8f0ed",
                            border: "4px solid black",
                            margin: "1px",
                            padding: "2px",
                            minWidth: "250px"
                        }
                    }
                    key = {index.toString()}
                >
                    
                        <div style={todoHeader}>
                            <span>
                                <Checkbox
                                    value = {todo.complete}
                                    checked = {todo.complete}
                                    size="small"
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
                        <Button 
                            variant="outlined"
                            color="success"
                            startIcon={<EditIcon />}
                            onClick={() => editTodo(index)}
                       />
                        
                        </span>
                        <span>
                        <Button 
                            variant="outlined"
                            color="error"
                            startIcon={<ClearIcon />}  
                            onClick = {() => removeTodo(index)}                                   
                        />
                                 
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