import React, { useState } from "react";
import Input from "./common/input";
import Joi from "joi-browser";
import useValidate from "./useValidate";

function LoginForm() {
	// const [data, setData] = useState({ username: "", password: "" });
	// const [errors, setErrors] = useState({});
	const schema = {
		username: Joi.string().required().label("Username"),
		password: Joi.string().required().label("Password"),
	};
	const doSubmit = () => {
		//call server
		console.log("Submitted");
	};
	const { data, errors, handleChange, handleSubmit, validate } = useValidate(schema);



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
					name={"password"}
					label={"Password"}
					data={data.password}
					onChange={handleChange}
					error={errors.password}
				/>
				<button
					disabled={validate()}
					type="submit"
					className="btn btn-primary"
				>
					Login
				</button>
			</form>
		</div>
	);
}

export default LoginForm;
