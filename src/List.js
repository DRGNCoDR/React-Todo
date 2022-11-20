import React from 'react';
import { useState } from 'react';

const Container = {
    padding: "5px"
}

const todosContainer = {
    listStyleType: "none"
}

const todos = [
    { id: Date.now, title: "test1", complete: false},
    { id: Date.now, title: "test2", complete: true},
]

const todoList = [
    todos.map((item, index) => (
        <li>
            <div key={index}>
                <input
                    value= {item.complete}
                    defaultChecked = {item.complete}
                    type = "checkbox"
                />
                <span>
                    {item.title}
                </span>
            </div>
        </li>
    ))
]

let completed = []

const CompleteAll = () => {
    todos.forEach((item)=>{
        if (!item.complete){
            item.complete = true
            completed.push(item)
        }
    })
    console.log(completed)
}

function List(){
    return (
        <div
            style={Container}
        >
            <button onClick={CompleteAll}>
                Mark All Complete
            </button>
            <ul style={todosContainer}>
                {todoList}
            </ul>
        </div>
    );
  }

  export default List;
