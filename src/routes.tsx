import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Dashboard from "./pages/dashboard/Dashboard";
import AddSkill from "./pages/dashboard/Skills/AddSkill";
import EditSkill from "./pages/dashboard/Skills/EditSkill";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "add-skill",
        element: <AddSkill />,
      },
      {
        path: "edit-skill",
        element: <EditSkill />,
      },
    ],
  },
]);
