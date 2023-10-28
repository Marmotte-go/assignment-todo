import "./AddNew.scss";
import { useState } from "react";
import Editor from "./Editor";

const AddNew = ({ handleAddNew, id }) => {
  const [showForm, setShowForm] = useState(false);
  const [newTodo, setNewTodo] = useState({
    title: "",
    deadline: "",
    status: "notStarted",
  });

  const handleAdd = () => {
    handleAddNew(newTodo);
    setNewTodo({
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
        <div className="addForm">
         <Editor newTodo={newTodo} setNewTodo={setNewTodo} />
          <div className="btns">
            <button className="btn cancel" onClick={() => setShowForm(false)}>
              Cancel
            </button>
            <button className="btn add" onClick={handleAdd}>
              Add
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddNew;
