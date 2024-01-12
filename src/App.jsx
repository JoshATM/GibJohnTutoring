import { RouterProvider, createBrowserRouter } from "react-router-dom";

import PageNotFound from "./pages/404";
import Home from "./pages/Home"
import FindATutor from "./pages/FindATutor";
import UsersInformation from "./pages/UsersInformation";
import Undefined from './assets/Undefined.jpg'
import './styles.css'


const App = () => {
  if (localStorage.getItem('profilePicture') == null){
    localStorage.setItem('profilePicture', Undefined)
  }
  const router = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "*", element: <PageNotFound /> },
    { path: "/FindATutor", element: <FindATutor /> },
    { path: "/Profile", element: <UsersInformation /> },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;