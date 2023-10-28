import "./AddNew.scss";
import { useState } from "react";

const AddNew = ({ handleAddNew, id }) => {
  const [showForm, setShowForm] = useState(false);
  const [newTodo, setNewTodo] = useState({
    id: id,
    title: "",
    deadline: "",
    status: "notStarted",
  });

  const handleAdd = () => {
    handleAddNew(newTodo);
    setNewTodo({
      id: id,
      title: "",
      deadline: "",
      status: "notStarted",
    });
    setShowForm(false);
  };

  return (
    <div className="addNew">
      <button className="btn trigger" onClick={() => setShowForm(true)}>
        Add New +
      </button>
      {showForm && (
        <form>
          <input
            type="text"
            placeholder="Title"
            className="title"
            value={newTodo.title}
            onChange={(e) => setNewTodo({ ...newTodo, title: e.target.value })}
          />
          <div className="info">
            <input
              type="text"
              placeholder="Deadline"
              value={newTodo.deadline}
              onChange={(e) =>
                setNewTodo({ ...newTodo, deadline: e.target.value })
              }
            />
            <select
              name="status"
              id="status"
              value={newTodo.status}
              onChange={(e) => {
                setNewTodo({ ...newTodo, status: e.target.value });
              }}
            >
              <option value="notStarted">Not Started</option>
              <option value="inProgress">In Progress</option>
              <option value="done">Done</option>
            </select>
          </div>
          <div className="btns">
            <button className="btn cancel" onClick={() => setShowForm(false)}>
              Cancel
            </button>
            <button className="btn add" onClick={handleAdd}>
              Add
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default AddNew;
