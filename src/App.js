
import './App.css';
import { useState } from 'react';
function App() {
 const [todo, addValue] = useState([]);
 const[workToAdd, setValue] = useState([]);
 return(
  <div>
    <h1 align = "center">To Do List</h1>
    <label align = "center">Enter the work</label>
    <input onChange={(event) => {
      setValue(event.target.value);
    }} type = "text" value = {workToAdd}/>
    <button onClick={() => {
      addValue([...todo, workToAdd]);
      setValue("");
    }}>add</button>
    { todo.length !== 0 && todo.map((works) => { return <h1 align = "center">{works}</h1>})}
  </div>
 )
}

export default App;
