
import './App.css';
import { useState } from 'react';
import {List} from "./List";
function App() {
 const [todo, addValue] = useState([]);
 const[workToAdd, setValue] = useState([]);
 return(
  <div>
    <label align = "center">Enter the work</label>
    <input onChange={(event) => {
      setValue(event.target.value);
    }} type = "text" value = {workToAdd}/>
    <button onClick={() => {
      addValue([...todo, workToAdd]);
      setValue("");
    }}>add</button>
    { todo.length != 0 && todo.map((works) => { return <h1 align = "center">{works}</h1>})}
  </div>
 )
}

export default App;
