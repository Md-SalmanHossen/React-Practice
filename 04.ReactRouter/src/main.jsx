import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {createBrowserRouter,RouterProvider,} from "react-router-dom"
import Home from './pages/Home.jsx'
import Product from './pages/Product.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import NotFound from './pages/NotFound.jsx'
import Navbar from './layout/Navbar.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    children:[
      {
        path: "/products",
        element : <Product/>,
      },
      {
        path: "/",
        element : <Home/>,
      },
      {
        path: "/about",
        element: <About/>,
      },
      {
        path: "/contact",
        element:<Contact/>,
      },
      {
        path :"*",
        element: <NotFound/>
      }
    ]
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>,
)
