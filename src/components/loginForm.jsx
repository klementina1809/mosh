import React from "react";
import { useState } from "react";
import Input from "./common/input";

function LoginForm() {
	const [value, setValue] = useState({ username: "", password: "" });
	const [errors, setErrors] = useState({ });

	const handleChange = ({ currentTarget: input }) => {
		let newValue = { ...value };
		newValue[input.name] = input.value;
		setValue(newValue);
	};

	const validate = () => {
		const errors = {};
		if (value.username.trim() === '') {
			errors.username = 'Username is required.';
		}
		if (value.password.trim() === '') {
			errors.password = 'Password is required.';
		}
		return Object.keys(errors).length === 0 ? null : errors;
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		const newError = validate();
		console.log('newError',newError);
		setErrors(newError);
	};
	return (
		<div>
			<form onSubmit={(e) => handleSubmit(e)}>
				{/* <div className="mb-3">
					<label htmlFor="username" className="form-label">
						Username
					</label>
					<input autoFocus id="username"
						type="text"
						name="username"
						className="form-control"
						onChange={handleChange}
						value = {value.username}
					/>
					<div id="emailHelp" className="form-text">
						We'll never share your email with anyone else.
					</div>
				</div> */}
				<Input
					name={"username"}
					label={"Username"}
					value={value.username}
					onChange={handleChange}
				/>
				<Input
					name={"password"}
					label={"Password"}
					value={value.password}
					onChange={handleChange}
				/>
				{/* <div className="mb-3">
					<label htmlFor="password" className="form-label">
						Password
					</label>
					<input
						id="password"
						type="password"
						name="password"
						className="form-control"
						onChange={handleChange}
						value={value.password}
					/>
				</div> */}
				<button type="submit" className="btn btn-primary">
					Login
				</button>
			</form>
		</div>
	);
}

export default LoginForm;
