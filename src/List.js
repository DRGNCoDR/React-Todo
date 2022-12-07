import React from 'react';
import { useState } from 'react';

const List = () => {

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
    const todoContainer = {
        border: "2px solid black",
        padding: "5px",
        margin: "2px"
    }
    const pad2 = {
        padding: "2px"
    }
    const pad_L_5 ={
        paddingLeft: "5px"
    }

    const [todos, setTodos] = useState([])

    function addTodo()
    {
        const newTodos =
        [
            ...todos,
            {
                title: document.getElementById("Title").value,
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
            </div>
            <ul style={todoList}>
                {
                    todos.map((todo, index) => (
                    <li
                        style={todoContainer}
                        key={index.toString()}
                    >
                        <input
                            type="checkbox"
                            value={todo.complete}
                            checked = {todo.complete}
                            onChange ={() => completeTodo(false, index)}
                        />
                        <span style={pad2}>
                            {todo.title}
                        </span>
                        <span style={pad_L_5}>
                            <button
                                onClick={() => removeTodo(index)}
                            >
                                X
                            </button>
                        </span>
                    </li>
                    ))
                }
            </ul>
            <div>
                <button
                    onClick={() =>completeTodo(true)}
                >
                    Complete All
                </button>
            </div>
        </div>
    )
}
export default List
