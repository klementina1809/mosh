import React from "react";
import { useState } from "react";
import Input from "./common/input";
import Joi from "joi-browser";

function LoginForm() {
	const [value, setValue] = useState({ username: "", password: "" });
	const [errors, setErrors] = useState({});

	const schema = {
		username: Joi.string().required(),
		password: Joi.string().required(),
	};

	const validate = () => {
		const result = Joi.validate(value, schema, { abortEarly: false });
		console.log("result", result);

		const errors = {};
		if (value.username.trim() === "") {
			errors.username = "Username is required.";
		}
		if (value.password.trim() === "") {
			errors.password = "Password is required.";
		}
		return Object.keys(errors).length === 0 ? null : errors;
	};
	const validateProperty = ({ name, value }) => {
		if (name === "username") {
			if (value.trim() === "") return "Username is required";
		}
		if (name === "password") {
			if (value.trim() === "") return "Password is required";
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const newError = validate();
		setErrors(newError || {});
	};

	const handleChange = ({ currentTarget: input }) => {
		const errors2 = { ...errors };

		const errorMessage = validateProperty(input);
		if (errorMessage) errors2[input.name] = errorMessage;
		else delete errors[input.name];

		let newValue = { ...value };
		newValue[input.name] = input.value;
		setValue(newValue);

		setErrors(errors2);
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
