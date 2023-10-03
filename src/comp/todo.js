import React from 'react';
import { useState } from 'react';
import Header from './header';
import Add from './add';
import List from './list';
import GlobalButtons from './globalButtons';

const Todo = () => {    
    const listContainer = {
        background: "teal",
        padding: "5px"
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
        setTodoCount(newTodos.length)
        setCompleteCount(newTodos.filter(t=>t.complete == true).length)
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
            <Add
                todos = {todos}
                addTodo = {addTodo}
            />            
            <List
                todos = {todos}
                addTodo = {addTodo}
                completeTodo = {completeTodo}
                editTodo = {editTodo}
                removeTodo = {removeTodo}
            />            
            <GlobalButtons
                loadTodo = {loadTodo}
                saveTodo = {saveTodo}
                completeTodo = {completeTodo}
            />
            
        </div>
    )
}
export default Todo
