import "./App.scss";
import AddNew from "./components/AddNew";
import TodoItem from "./components/TodoItem";

import { useState } from "react";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [currentId, setCurrentId] = useState(1);

  const handleAddNew = (newTodo) => {
    const newTodoWithID = {...newTodo, id: currentId};
    setTodoList([...todoList, newTodoWithID]);
    setCurrentId(prev => prev + 1);
  }

  //deep copy todoList to change the value
  //not the best way to do this, but since we don't have a database, we have to do this
  const handleEdit = (id, newTodo) => {
    const newTodoList = todoList.map((todo) => {
      if (todo.id === id) {
        return newTodo;
      }
      return todo;
    });
    setTodoList(newTodoList);
  }

  return (
    <div className="App">
      <h1>ToDo List</h1>
      <p>
        This is a demo of todo list. After you refresh this page, all the data
        will be lost.
      </p>
      <AddNew handleAddNew={handleAddNew} id={currentId} />
      <section className="todo-list">
        {todoList.map((todo) => (
          <TodoItem key={todo.id} todo={todo} handleEdit={handleEdit} />
        ))}
      </section>
      <footer>
        <span style={{borderLeftColor: "lightgreen"}}>Done</span>
        <span style={{borderLeftColor: "tomato"}}>Not Started</span>
        <span style={{borderLeftColor: "gold"}}>In progress</span>
      </footer>
    </div>
  );
}

export default App;
