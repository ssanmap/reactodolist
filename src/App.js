import './App.css';
import Todos from './components/Todos';
import DisplayTodos from "./components/DisplayTodos";

function App() {
  return (
    <div className="App">
      <h1>Lista de tareas</h1>
      <Todos />
      <br />
      <DisplayTodos />
    </div>
  );
}

export default App;
