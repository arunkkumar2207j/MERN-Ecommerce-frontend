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
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import ProductDetail from './features/product/components/ProductDetail';
import ProductDetailPage from './pages/ProductDetailPage';

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
  {
    path: "/cart",
    element: (<CartPage />)
  },
  {
    path: "/checkout",
    element: (<CheckoutPage />)
  },
  {
    path: "/product-detail",
    element: (<ProductDetailPage />)
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
