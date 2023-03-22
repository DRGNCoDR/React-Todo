import React from 'react';
import { useState } from 'react';
import Header from './header';

const Todo = () => {
    // const styles = {
    //     listContainer : {
    //         background: "teal",
    //         padding: "5px"
    //     },
    //     todoList : {
    //         listStyleType: "none",
    //         padding: "2px",
    //         display: "flex",
    //         flexWrap: "wrap",
    //         justifyContent: "flex-start"
    //     },
    //     pad2 : {
    //         padding: "2px"
    //     },
    //     pad_L_5 :{
    //         paddingLeft: "5px"
    //     },
    //     center :{            
    //         justifyContent: "center"
    //     }
    // }
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
        justifyContent: "center"
    }

    const [todos, setTodos] =
        useState([])
    let [todoCount, setTodoCount] =
        useState(0)
    let [completeCount, setCompleteCount] =
        useState(0)
    
    function addTodo()
    {
        const currDate =
            Intl.DateTimeFormat("en").format(new Date())
        const newTodos =
        [
            ...todos,
            {
                title: document.getElementById("Title").value,
                createdDate:currDate,
                complete: false,
                completedDate: Date("12/31/9999")
            }
        ]
        setTodos(newTodos)
        setTodoCount(
            todos.length + 1
        )
    }

    function removeTodo(index){
        const newTodos = [...todos]

        if(newTodos[index].complete){
            setCompleteCount(completeCount-=1)
        }

        newTodos.splice(index, 1)

        setTodos(newTodos)
        setTodoCount(
            todos.length - 1
        )
    }
    function saveTodo(){
        const newTodos = [...todos]
        localStorage.setItem(
            "todo-list",
            JSON.stringify({newTodos})
        )
    }
    function loadTodo(){
        const newTodos = []
        const currTodos = JSON.parse(localStorage.getItem("todo-list"))
        
        const arr = Array.from(currTodos.newTodos)
        arr.forEach(item =>{
            newTodos.push(item)
        })
        setTodos(newTodos)
    }

    function editTodo(index){
        const newTodos = [...todos]

        newTodos[index].title =
            document.getElementById("Title").value

        setTodos(newTodos)
    }

    function completeTodo(completeAll, index) {
        const newTodos = [...todos]

        if (completeAll) {
            newTodos.forEach(todo => {
                todo.complete = true
                todo.completedDate =
                    Intl.DateTimeFormat("en").format(new Date())

                if(completeCount < todoCount){
                    setCompleteCount(completeCount += 1)
                }
            });
        }
        else
        {
            newTodos[index].complete = !newTodos[index].complete

            if(newTodos[index].complete){
                newTodos[index].completedDate =
                   Intl.DateTimeFormat("en").format(new Date())

                if(completeCount < todoCount){
                    setCompleteCount(completeCount += 1)
                }
            }else{
                newTodos[index].completedDate = ''

                if (completeCount>0)
                {
                    setCompleteCount(completeCount -= 1)
                }
            }
        }
        
        localStorage.setItem(
            "todo-list",
            JSON.stringify({newTodos})
        )
        setTodos(newTodos)
    }

    return(
        <div style={listContainer}>
            <Header
                todoCount = {todoCount}
                completeCount = {completeCount}
            />

            <div>
                <input
                    type="text"
                    placeholder='Enter new Todo'
                    value= {todos.title}
                    id="Title"
                />
                <button
                    onClick={addTodo}
                >
                    + Add
                </button>
                <span
                    style={center}
                >
                    <button
                        onClick={
                            () => completeTodo(true)
                        }
                    >
                        Complete All
                    </button>
                </span>
            </div>
            <ul
                style={todoList}
            >
                {
                    todos.map((todo, index) => (
                    <li
                        style={
                            {
                                backgroundColor: todo.complete ?
                                   "darkolivegreen" :
                                   "aquamarine",
                                border: "4px solid black",
                                margin: "1px",
                                padding: "2px"
                            }
                        }
                        key={index.toString()}
                    >
                        <p>
                            <em>
                                Created on: {todo.createdDate}
                            </em>
                        </p>
                        <p
                            style={
                                {display : todo.complete ? "" : "none"}
                            }
                        >
                            <em>
                                Completed on: {todo.completedDate}
                            </em>
                        </p>
                        <input
                            type="checkbox"
                            value= {todo.complete}
                            checked = {todo.complete}
                            onChange ={
                                () => completeTodo(false, index)
                            }
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
                        <span
                            style= {pad_L_5}
                        >
                            <button
                                onClick={() => editTodo(index)}
                            >
                                Edit
                            </button>
                        </span>
                        <div
                            style={
                                {
                                    pad_L_5,
                                    textAlign:"center"
                                }
                            }
                        >
                            <button
                                onClick={
                                    () => removeTodo(index)
                                }
                                style={
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
            <button
                    onClick={loadTodo}
                >
                    Load
                </button>
            <button
                    onClick={saveTodo}
                >
                    Save
                </button>
        </div>
    )
}
export default Todo
