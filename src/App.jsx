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
  const isLoggedIn = localStorage.getItem('LoggedIn') === 'true';

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Header />,
      children: [
        { path: "", element: <Home /> },
        { path: "*", element: <PageNotFound /> },
        { path: "FindATutor", element: isLoggedIn ? <FindATutor /> : <Login />},
        { path: "Profile", element: isLoggedIn ? <UsersInformation /> : <Login /> },
        { path: "Login", element: <Login /> },
        { path: "Register", element: <Register /> },
        { path: "Resources", element: isLoggedIn ? <Resources /> : <Login />},
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