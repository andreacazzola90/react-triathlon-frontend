import { createBrowserRouter } from "react-router-dom";

import LayoutPrivate from "../layouts/LayoutPrivate";
import LayoutRoot from "../layouts/LayoutRoot";

import Dashboard from "../pages/Dashboard";
import Profilo from "../pages/Profilo";
import Registrazione from "../pages/Registrazione";
import RegistrazioneCompletata from "../pages/RegistrazioneCompletata";
import Home from "../pages/Home";



export const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutRoot />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/dashboard",
        element: <LayoutPrivate />,
        children: [
          {
            index: true,
            element: <Dashboard />,
          },
        ],
      },
    ],
  },
  {
    path: "/registrazione",
    element: <LayoutRoot />,
    children: [  
      {
        index: true,
        element: <Registrazione />,
      },
    ],
  },
  {
    path: "/registrazione/:date",
    element: <LayoutRoot />,
    children: [  
      {
        index: true,
        element: <Registrazione />,
      },
    ],
  },
  {
    path: "/registrazionecompletata",
    element: <LayoutRoot />,
    children: [  
      {
        index: true,
        element: <RegistrazioneCompletata />,
      },
    ],
  },
  {
    path: "/profilo/:id",
    element: <LayoutRoot />,
    children: [  
      {
        index: true,
        element: <Profilo />,
      },
    ],
  }
]);
