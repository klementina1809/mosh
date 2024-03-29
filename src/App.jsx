import { useState } from "react";

import {
	createBrowserRouter,
	RouterProvider,
	Outlet,
	Navigate,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Movies from "./components/Movies";
import Customers from "./components/Customers";
import Rentals from "./components/Rentals";
import NotFound from "./components/NotFound";
import LoginForm from "./components/loginForm";

import "./App.css";

const BasicLayout = () => {
	return (
		<>
			<Navbar />
			<Outlet />
		</>
	);
};

function App() {
	const router = createBrowserRouter([
		{
			element: <BasicLayout />,
			children: [
				{
					path: "/movies",
					element: <Movies />,
				},
				{
					path: "/customers",
					element: <Customers />,
				},
				{
					path: "/rentals",
					element: <Rentals />,
				},
				{
					path: "/not-found",
					element: <NotFound />,
				},
				{
					path: "/login",
					element: <LoginForm />,
				},
				{
					path: "/",
					element: <Navigate to="/movies" replace />,
				},
				{
					path: "*",
					element: <Navigate to="/not-found" replace />,
				},
			],
		},
	]);

	return (
		<>
			<RouterProvider router={router} />
		</>
	);
}

export default App;
