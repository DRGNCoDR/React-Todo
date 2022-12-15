import React from 'react';

import Header from './Header';
import List from './List';


const date = new Date().toDateString()
const completion = 0

const container = {
  background: 'gray',
  padding: '2px',
  border: '2px solid black',
  borderRadius: "10px",
  maxWidth: '700px',
  margin: 'auto'
};
const centerText = {
    textAlign: 'center'
}


function App(){
  return (
    <div>
      <div
        style = {container}
      >
          {<Header/>}
          {<List/>}
      </div>
    </div>
  );
}


export default App;
