import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { TasksProvider } from "./core/providers/task_provider.tsx";
import App from "./App.tsx";
import { AuthProvider } from "./core/providers/auth_provider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AuthProvider>
      <TasksProvider>
        <App />
      </TasksProvider>
    </AuthProvider>
  </React.StrictMode>
);
