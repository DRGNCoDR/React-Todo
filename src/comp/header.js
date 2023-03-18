import React from 'react';

const header = {
    display: 'flex',
    justifyContent: 'space-between',
    background: '#00ffc3',
    padding: '5px',
    borderRadius: "5px",
    fontWeight: "bold"
  };

function Header({todoCount, completeCount}){
    const date = new Date().toDateString()
    const percent = 0
    function getCompletePercent(){
        var percent =
            (todoCount > 0 && completeCount > 0) ?
                (completeCount/todoCount) *100 :  0
        
            percent = (percent > 100) ? 100 : percent
        return(
            percent
        )
    }
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
            {getCompletePercent()} % Complete
        </span>
    </div>
    );

  }

  export default Header;
