import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
// import Movies from "./components/Movies";
// import Customers from "./components/Customers";
// import Rentals from "./components/Rentals";
// import NotFound from "./components/NotFound";
// import {
// 	createBrowserRouter,
// 	RouterProvider,
// 	Navigate,
// } from "react-router-dom";
// import Navbar from './components/Navbar.jsx';

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//   },
//   {
//     path: "/movies",
//     element: <Movies />,
//   },
//   {
//     path: "/customers",
//     element: <Customers />,
//   },
//   {
//     path: "/rentals",
//     element: <Rentals />,
//   },
//   {
//     path: "/not-found",
//     element: <NotFound />,
//   },
//   {
//     path: "/",
//     element: <Navigate to="/movies" replace />,
//   },
//   {
//     path: "*",
//     element: <Navigate to="/not-found" replace />,
//   },
// ]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
)
