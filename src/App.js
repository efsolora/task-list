import "./App.css";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="App" id="inputs">
      <input type="text" placeholder="Nueva tarea"></input>
      <button></button>
      <button></button>
      <TodoList />
    </div>
  );
}

export default App;
