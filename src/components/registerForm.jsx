import React, { useState } from "react";
import Input from "./common/input";
import Joi from "joi-browser";
import useValidate from "./useValidate";

function RegisterForm() {
	// const [data, setData] = useState({ username: "", password: "", name: "" });
	// const [errors, setErrors] = useState({});
	const schema = {
		username: Joi.string().email().required().label("Username"),
		password: Joi.string().min(5).required().label("Password"),
		name: Joi.string().required().label("Name"),
	};
	const doSubmit = () => {
		//call server
		console.log("Submitted");
	};
	const { data, errors, handleChange, handleSubmit, validate } =
		useValidate(schema);

	return (
		<div>
			<form onSubmit={(e) => handleSubmit(e, doSubmit)}>
				<Input
					name={"username"}
					label={"Username"}
					data={data.username}
					onChange={handleChange}
					error={errors.username}
				/>
				<Input
					type="password"
					name={"password"}
					label={"Password"}
					data={data.password}
					onChange={handleChange}
					error={errors.password}
				/>
				<Input
					name={"name"}
					label={"Name"}
					data={data.name}
					onChange={handleChange}
					error={errors.name}
				/>
				<button
					disabled={validate()}
					type="submit"
					className="btn btn-primary"
				>
					Register
				</button>
			</form>
		</div>
	);
}

export default RegisterForm;
