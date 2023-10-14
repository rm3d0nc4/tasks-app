import { NavLink } from "react-router-dom";
import { useAuth } from "../../hooks/use_auth";

export function Header() {
  const { isAuthenticated, signOut } = useAuth();

  const onHandleClick = () => {
    if (isAuthenticated) {
      const onConfirm = confirm("Are you sure you want to logout?");
      if (onConfirm) {
        signOut();
      }
    }
  };
  return (
    <header>
      <h1>Task App</h1>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/login" onClick={onHandleClick}>
              {isAuthenticated ? "Logout" : "Login"}
            </NavLink>
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
