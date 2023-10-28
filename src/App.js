import "./App.scss";
import AddNew from "./components/AddNew";
import TodoItem from "./components/TodoItem";

import { useState } from "react";

function App() {
  const [todoList, setTodoList] = useState([
    {
      id: 1,
      title: "Go to work",
      deadline: "8 :00",
      status: "done",
    },
    {
      id: 2,
      title: "Buy some food",
      deadline: "9 :00",
      status: "inPregress",
    },
    {
      id: 3,
      title: "Go to bed",
      deadline: "11 :00",
      status: "notStarted",
    },
  ]);

  const handleAddNew = (newTodo) => {
    setTodoList([...todoList, newTodo]);
  }

  return (
    <div className="App">
      <h1>ToDo List</h1>
      <p>
        This is a demo of todo list. After you refresh this page, all the data
        will be lost.
      </p>
      <AddNew handleAddNew={handleAddNew} id={todoList.length} />
      <section className="todo-list">
        {todoList.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </section>
    </div>
  );
}

export default App;
