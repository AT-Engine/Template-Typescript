import { createBrowserRouter } from "react-router-dom"
// Views - Pages
import App from "../views/App";
import NavBar from "./NavBar";



const router = createBrowserRouter([
    {
      path: '/',
      element: <NavBar />,
      children: [
        {
          path: 'App',
          element: <App />  
        }
      ]
    }
  ])

  export default router