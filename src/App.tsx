import { BrowserRouter, NavLink } from "react-router-dom";
import "./App.css";
import { TasksProvider } from "./core/providers/task_provider";
import { AppRoutes } from "./core/routes/app_routes";

function App() {
  return (
    <>
    <BrowserRouter>
      <header>
        <h1>Task App</h1>
        <nav>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/login">Login</NavLink>
            </li>
            <li>
              <NavLink to="/tasks">Tasks</NavLink>
            </li>
            <li>
              <NavLink to="/new-task">Add</NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <TasksProvider>
        <AppRoutes />
      </TasksProvider>
      <footer>
        <p>Romero Antonio Ramos de Mendonça</p>
      </footer>
    </BrowserRouter>
    </>
  );
}

export default App;
