import { RouterProvider, createBrowserRouter } from "react-router-dom";

import PageNotFound from "./pages/404";
import Home from "./pages/Home"
import FindATutor from "./pages/FindATutor";
import UsersInformation from "./pages/UsersInformation";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Resources from "./pages/Resources";

import Header from "./Navigation/NavigationBar";

import Undefined from './assets/Undefined.jpg'
import './styles.css'


const App = () => {
  if (localStorage.getItem('profilePicture') == null){
    localStorage.setItem('profilePicture', Undefined)
  }
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Header />,
      children: [
        { path: "", element: <Home /> },
        { path: "*", element: <PageNotFound /> },
        { path: "FindATutor", element: <FindATutor /> },
        { path: "Profile", element: <UsersInformation /> },
        { path: "Login", element: <Login /> },
        { path: "Register", element: <Register /> },
        { path: "Resources", element: <Resources /> },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;