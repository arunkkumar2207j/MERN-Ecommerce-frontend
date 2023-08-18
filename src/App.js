import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import './App.css';
import Home from './pages/Home';
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";

const routes = createBrowserRouter([
  {
    path: "/",
    element: (<Home/> )
  },
  {
    path: "/login",
    element: (<LoginPage />)
  },
  {
    path: "/signup",
    element: (<SignupPage />)
  },
])

function App() {
  return (
    <div className="">
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
