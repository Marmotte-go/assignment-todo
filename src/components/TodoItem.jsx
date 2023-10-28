import "./TodoItem.scss";
import { useState } from "react";
import Editor from "./Editor";

const TodoItem = ({ todo, handleEdit }) => {
  const [newTodo, setNewTodo] = useState({
    id: todo.id,
    title: todo.title,
    deadline: todo.deadline,
    status: todo.status,
  });

  console.log("rerender");
  let color = "";
  switch (newTodo.status) {
    case "done":
      color = "lightgreen";
      break;
    case "notStarted":
      color = "tomato";
      break;
    case "inProgress":
      color = "gold";
      break;
    default:
      color = "black";
  }

  const [showForm, setShowForm] = useState(false);
  const toggleShowForm = () => {
    setShowForm(!showForm);
  };

  const handleCancel = () => {
    setNewTodo({
      id: todo.id,
      title: todo.title,
      deadline: todo.deadline,
      status: todo.status,
    });
    setShowForm(false);
  };

  const handleConfirm = () => {
    handleEdit(newTodo.id, newTodo);
    setShowForm(false);
  };

  return (
    <div className="itemWrapper">
      <div
        className="todoItem"
        style={{ borderLeftColor: `${color}` }}
        onClick={toggleShowForm}
      >
        <h3>{todo.title}</h3>
        <p>{todo.deadline}</p>
      </div>

      {showForm && (
        <div className="editor-form">
          <Editor setNewTodo={setNewTodo} newTodo={newTodo} />
          <div className="btns">
            <button className="btn cancel" onClick={handleCancel}>
              Cancel
            </button>
            <button className="btn add" onClick={handleConfirm}>
              Confirm
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TodoItem;
