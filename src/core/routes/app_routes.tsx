import { Route, Routes } from "react-router-dom";
import { HomePage } from "../../pages/HomePage";
import { LoginPage } from "../../pages/LoginPage";
import { TaskPage } from "../../pages/TasksPage";
import { TaskFormPage } from "../../pages/TaskFormPage";
import { TaskDetailsPage } from "../../pages/TaskDetailsPage";

export function AppRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/new-task" element={<TaskFormPage />} />
        <Route path="/tasks">
          <Route index element={<TaskPage />} />
          <Route path=":id" element={<TaskDetailsPage />} />
        </Route>
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </>
  );
}
