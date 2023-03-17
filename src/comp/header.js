import React from 'react';
import Todo from './todo'

const header = {
    display: 'flex',
    justifyContent: 'space-between',
    background: '#00ffc3',
    padding: '5px',
    borderRadius: "5px",
    fontWeight: "bold"
  };

function Header(){
    const date = new Date().toDateString()
    const completion = 0

    return (
    <div
        style= {header}
    >
        <span>
            {date}
        </span>
        <span>
            To Do
        </span>
        <span>
            {completion} % Complete
        </span>
    </div>
    );

  }

  export default Header;
