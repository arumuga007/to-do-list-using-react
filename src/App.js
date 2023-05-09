
import './App.css';
import { AddTask } from './TaskManage';
import { useState } from 'react';
function App() {
 const [todo, addValue] = useState([]);
 const[workToAdd, setValue] = useState("");
const deleteTask = (tasks) => {
  addValue(tasks);
}
const addWork = () => {
  let newTask = {id: todo.length === 0 ? 1 : todo[todo.length - 1].id + 1, task:workToAdd, completed:false};
  addValue([...todo, newTask]);
  setValue("");
}
 return(
  <div>
    <h1 align = "center">To Do List</h1>
    <h1>Enter the work</h1>
    <input placeholder="Enter your task here" onChange={
        (event) => {
          setValue(event.target.value);
        }
    } 
    onKeyUp={
      (event) => {
        if(event.keyCode == 13)
          addWork();
      }
    }
    value = {workToAdd}/>
    <button onClick={() => {addWork()}}>add</button>
    <AddTask tasks = {todo} deleteTask = {deleteTask}/>
  </div>
 )
}
export default App;
