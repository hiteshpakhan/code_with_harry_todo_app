import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import { Footer }  from './components/Footer';
import Todos from './components/Todos';
import {AddTodo} from './components/AddTodo';
// import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from "./components/About";


function App() {
  let initTodo;
  if(localStorage.getItem("todos") === null){
    initTodo = [];
  }else{
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }


const onDelete = (todo) =>{
  console.log("i am deleted ", todo);
  setTodos(todos.filter((eachTodo) => {
    return eachTodo !== todo
  }));
  localStorage.setItem("todos", JSON.stringify(todos));
}

const addTodo = (id, title) =>{
  console.log("i am adding this todo id: ", id ,"and title:", title)
  // let sno;
  // if(todos.length == 0){
  //   sno = 1;
  // }else{
  //   sno = todos[todos.length-1].id+1;
  // }
  const newTodo = {
    id: id,
    title: title
  }
  console.log("the new todo that has been ready to added is :", newTodo)
  setTodos([...todos, newTodo]);

}

const [todos, setTodos] = useState(initTodo);
useEffect(() => {
  localStorage.setItem("todos", JSON.stringify(todos));
}, [todos])

  return (
    <>
    <Router>
        <Header searchBar={true} />
        
        {/* <Switch>

        <Route exact path='/' render={()=>{
          return (<>
          <AddTodo addTodo={addTodo} />
          <Todos todos={todos} onDelete={onDelete} />
          </>)
        }} >

        </Route>

        <Route exact path='/about'>
          <About />
        </Route>


        </Switch> */}

        <Routes>
          <Route exact path="/" element={<>
          <AddTodo addTodo={addTodo} />
          <Todos todos={todos} onDelete={onDelete} />
          </>}/>

          <Route exact path="/about" element={<About/>}/>
        </Routes>





        
        <Footer />
      </Router>
    </>
  );
}

export default App;
