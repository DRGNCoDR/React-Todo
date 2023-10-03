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
    const currDate = new Date().toDateString()
    let percentComplete = 0
    
    function getCompletePercent(){
        var getPercentageValue =
            (todoCount > 0 && completeCount > 0) ?
                (completeCount/todoCount) * 100 : 
                0        
        
        percentComplete = (getPercentageValue > 100) ? 100 : getPercentageValue
        
        return(
            percentComplete
        )
    }

    return (
    <div
        style= {header}
    >
        <span>
            {currDate}
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
