import { Menus } from './Menus';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css';
import { AddTask } from './TaskManage';
import { useState } from 'react';
import {Completed} from "./navbar/Completed";
import {Contact} from "./navbar/Contact";
import {GetTask} from "./navbar/GetTask";
import {Home} from "./navbar/Home";
function App() {
 const [todo, addValue] = useState([]);
 const[workToAdd, setValue] = useState("");
const deleteTask = (tasks) => {
  addValue(tasks);
}
const addWork = () => {
  if(workToAdd === "") {
    alert("Task cannot be empty");
    return;
}
  let newTask = {id: todo.length === 0 ? 1 : todo[todo.length - 1].id + 1, task:workToAdd, completed:false};
  addValue([...todo, newTask]);
  setValue("");
}
 return(
  <div  className="container">
    <BrowserRouter>
    <div className='header-container'>
    <h1 className='header'>To Do List</h1>
    <Menus />
    </div>
      <Routes>
        <Route path = "/" element = {<Home />}></Route>
        <Route path = "/add" element = {<GetTask />}></Route>
        <Route path = "/completed" element = {<Completed />}></Route>
        <Route path = "/contact" element = {<Contact />}></Route>
      </Routes>
    </BrowserRouter>
    <h1>Enter the work</h1>
    <input placeholder="Enter your task here" onChange={
        (event) => {
          setValue(event.target.value);
        }
    } 
    onKeyUp={
      (event) => {
        if(event.keyCode === 13)
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