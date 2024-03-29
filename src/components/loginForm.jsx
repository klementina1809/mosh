import React from "react";
import { useState } from "react";
import Input from "./common/input";

function LoginForm() {
	const [value, setValue] = useState({ username: "", password: "" });
	const [errors, setErrors] = useState({});

	const handleChange = ({ currentTarget: input }) => {
		let newValue = { ...value };
		newValue[input.name] = input.value;
		setValue(newValue);
	};

	const validate = () => {
		const errors = {};
		if (value.username.trim() === "") {
			errors.username = "Username is required.";
		}
		if (value.password.trim() === "") {
			errors.password = "Password is required.";
		}
		return Object.keys(errors).length === 0 ? null : errors;
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const newError = validate();
		setErrors(newError || {});
	};
	return (
		<div>
			<form onSubmit={(e) => handleSubmit(e)}>
				<Input
					name={"username"}
					label={"Username"}
					value={value.username}
					onChange={handleChange}
					error={errors.username}
				/>
				<Input
					name={"password"}
					label={"Password"}
					value={value.password}
					onChange={handleChange}
					error={errors.password}
				/>
				<button type="submit" className="btn btn-primary">
					Login
				</button>
			</form>
		</div>
	);
}

export default LoginForm;
