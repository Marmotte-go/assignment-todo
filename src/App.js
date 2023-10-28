import './App.scss';
import AddNew from './components/AddNew';
import TodoItem from './components/TodoItem';

function App() {
  return (
    <div className="App">
      <h1>ToDo List</h1>
      <p>This is a demo of todo list. After you refresh this page, all the data will be lost.</p>
      <section className="todo-list">
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
      </section>
      <AddNew />
    </div>
  );
}

export default App;
