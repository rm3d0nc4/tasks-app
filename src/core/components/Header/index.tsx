import { NavLink } from "react-router-dom";

export function Header() {
    return (
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
    );
}