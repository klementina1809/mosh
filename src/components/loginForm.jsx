import React, { useState } from "react";
import Input from "./common/input";
import Joi from "joi-browser";

function LoginForm() {
	const [value, setValue] = useState({ username: "", password: "" });
	const [errors, setErrors] = useState({});

	const schema = {
		username: Joi.string().required().label("Username"),
		password: Joi.string().required().label("Password"),
	};

	const validateProperty = ({ name, value }) => {
		if (name === "username") {
			if (value.trim() === "") return "Username is required";
		}
		if (name === "password") {
			if (value.trim() === "") return "Password is required";
		}
	};

	const handleChange = ({ currentTarget: input }) => {
		let newValue = { ...value };
		newValue[input.name] = input.value;
		setValue(newValue);

		const errorMessage = validateProperty(input);
		const newErrors = { ...errors };

		if (errorMessage) newErrors[input.name] = errorMessage;
		else delete newErrors[input.name];
		setErrors(newErrors);
	};

	const validate = () => {
		const { error } = Joi.validate(value, schema, { abortEarly: false });
		if (!error) return null;

		const errors = {};
		for (let item of error.details) errors[item.path[0]] = item.message; // превращаем массив в обьект
		return errors;
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
