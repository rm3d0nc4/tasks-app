import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import { HomePage } from "../../pages/HomePage";
import { LoginPage } from "../../pages/LoginPage";
import { TaskPage } from "../../pages/TasksPage";
import { TaskFormPage } from "../../pages/TaskFormPage";
import { TaskDetailsPage } from "../../pages/TaskDetailsPage";
import { Header } from "../components/Header";

export function AppRoutes() {
  const router = createBrowserRouter([
    {
      element: (
        <>
          <Header />
          <Outlet />
        </>
      ),
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        { path: "login", element: <LoginPage /> },
        { path: "new-task", element: <TaskFormPage /> },
        { path: "tasks", element: <TaskPage /> },
        { path: "tasks/:id", element: <TaskDetailsPage /> },
      ],
    },
    { path: "*", element: <h1>Not Found</h1> },
  ]);

  return <RouterProvider router={router} />;
}
