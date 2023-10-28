import "./TodoItem.scss";
import { useState } from "react";

const TodoItem = ({ todo }) => {
  let color = "";
  switch (todo.status) {
    case "done":
      color = "lightgreen";
      break;
    case "notStarted":
      color = "tomato";
      break;
    case "inPregress":
      color = "gold";
      break;
    default:
      color = "black";
  }

  const [showForm, setShowForm] = useState(false);
  const toggleShowForm = () => {
    setShowForm(!showForm);
  }

  const handleCancel = () => {
    setShowForm(false);
  };

  const handleConfirm = () => {
    //do something
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
        <form>
          <input
            type="text"
            placeholder="Title"
            className="title"
            value={todo.title}
          />
          <div className="info">
            <input type="text" placeholder="Deadline" value={todo.deadline} />
            <select name="status" id="status" value={todo.status}>
              <option value="notStarted">Not Started</option>
              <option value="inProgress">In Progress</option>
              <option value="done">Done</option>
            </select>
          </div>
          <div className="btns">
            <button className="btn cancel" onClick={handleCancel}>
              Cancel
            </button>
            <button className="btn add" onClick={handleConfirm}>
              Confirm
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default TodoItem;
