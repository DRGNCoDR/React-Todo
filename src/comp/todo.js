import React from 'react';
import { useState } from 'react';

const Todo = () => {

    const listContainer = {
        background: "teal",
        padding: "5px"
    }
    const todoList = {
        listStyleType: "none",
        padding: "2px",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "flex-start"
    }
    
    const pad2 = {
        padding: "2px"
    }
    const pad_L_5 ={
        paddingLeft: "5px"
    }
    const center ={
        display: "flex",
        justifyContent: "center"
    }

    const [todos, setTodos] = useState([])

    function addTodo()
    {
        const currDate = new Date();
        const newTodos =
        [
            ...todos,
            {
                title: document.getElementById("Title").value,
                createdDate:currDate,
                complete: false
            }
        ]
        setTodos(newTodos)
        
    }
    
    function removeTodo(index){
        const newTodos = [...todos]
        newTodos.splice(index, 1)
        setTodos(newTodos)
    }

    function editTodo(index){
        const newTodos = [...todos]
        newTodos[index].title = document.getElementById("Title").value
        setTodos(newTodos)
    }

    function completeTodo(completeAll, index) {
        const newTodos = [...todos]
        if (completeAll) {
            newTodos.forEach(todo => {
                todo.complete = true
            });
        }
        else
        {
            newTodos[index].complete = !newTodos[index].complete
        }
        setTodos(newTodos)
    }

    return(
        <div style={listContainer}>
            <div>
                <input
                    type="text"
                    placeholder='Enter new Todo'
                    value= {todos.title}
                    id="Title"
                />
                <button onClick={addTodo}>
                    + Add
                </button>
                <span style={center}>
                    <button
                        onClick={() =>completeTodo(true)}
                    >
                        Complete All
                    </button>
                </span>
            </div>
            <ul style={todoList}>
                {
                    todos.map((todo, index) => (

                    <li
                        style={
                            {
                                backgroundColor: todo.complete ? "darkolivegreen" : "aquamarine",
                                border: "4px solid black",
                                margin: "1px",
                                padding: "2px"
                            }
                        }
                        key={index.toString()}
                    >
                        <p><em>Created on: 03/18/2023</em></p>
                        <p style={{display : todo.complete ? "" : "none"}}><em>Completed on: 03/18/2023</em></p>
                        <input
                            type="checkbox"
                            value={todo.complete}
                            checked = {todo.complete}
                            onChange ={() => completeTodo(false, index)}
                        />
                        <span style={
                                {
                                    pad2,
                                    textDecoration: todo.complete ? "line-through" : ""
                                }
                            }
                        >
                            {todo.title}
                        </span>
                        <span style={pad_L_5}>
                            <button
                                onClick={() => editTodo(index)}
                            >
                                Edit
                            </button>
                        </span>
                        <div style={{pad_L_5, textAlign:"center"}}>
                            <button
                                onClick={() => removeTodo(index)}
                                style={{width:"35%" }}                            >
                                X
                            </button>
                        </div>
                    </li>
                    ))
                }
            </ul>
        </div>
    )
}
export default Todo
