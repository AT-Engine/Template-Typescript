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
          path: '/', //we use / as path when we want the current element to render on our main path www.yoursite.com, for example
          element: <App />  
        }
        // when creating views, the path indicates the address that will be needed after www.yoursite.com/ in order to acces that view
        // {
        //   path: 'App',
        //   element: <App />  
        // }
      ]
    }
  ])

  export default router