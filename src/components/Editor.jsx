import "./Editor.scss";

const Editor = ({setNewTodo, newTodo}) => {
  return (
    <div className="editor">
      <input
        type="text"
        placeholder="Title"
        className="title"
        value={newTodo.title}
        onChange={(e) => setNewTodo({ ...newTodo, title: e.target.value })}
        required
        autoFocus
      />

      <div className="info">
        <input
          type="text"
          placeholder="Deadline"
          value={newTodo.deadline}
          onChange={(e) => setNewTodo({ ...newTodo, deadline: e.target.value })}
          required
        />
        <select
          name="status"
          id="status"
          value={newTodo.status}
          onChange={(e) => {
            setNewTodo({ ...newTodo, status: e.target.value });
          }}
          required
        >
          <option value="notStarted">Not Started</option>
          <option value="inProgress">In Progress</option>
          <option value="done">Done</option>
        </select>
      </div>
    </div>
  );
};

export default Editor;
