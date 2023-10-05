import React from 'react';
import Todo from './comp/todo';

const style = {
  container: {
    background: 'gray',
    padding: '2px',
    border: '2px solid black',
    borderRadius: "10px",
    maxWidth: '1000px',
    margin: 'auto'
  },
}

function App(){
  return (
    <div>
      <div
        style = {style.container}
      >
          {<Todo />}
      </div>
    </div>
  );
}

export default App;
