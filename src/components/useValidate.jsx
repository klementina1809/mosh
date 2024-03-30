import React, { useState } from "react";
import Joi from "joi-browser";

function useValidate(schema) {
	const [data, setData] = useState({});
	const [errors, setErrors] = useState({});

	const validateProperty = ({ name, value }) => {
		const obj = { [name]: value };
		const newSchema = { [name]: schema[name] };
		const { error } = Joi.validate(obj, newSchema);
		return error ? error.details[0].message : null;
	};

	const validate = () => {
		const { error } = Joi.validate(data, schema, { abortEarly: false });
		if (!error) return null;

		const newErrors = {};
		for (let item of error.details) newErrors[item.path[0]] = item.message; // превращаем массив в обьект
		return newErrors;
	};

	const handleSubmit = (e, doSubmit) => {
		e.preventDefault();
		const newError = validate();
		setErrors(newError || {});

		if (!newError) {
      doSubmit();
    }
	};

	const handleChange = ({ currentTarget: input }) => {
		let newData = { ...data };
		newData[input.name] = input.value;
		setData(newData);

		const errorMessage = validateProperty(input);

		const newErrors = { ...errors };
		if (errorMessage) newErrors[input.name] = errorMessage;
		else delete newErrors[input.name];
		setErrors(newErrors);
	};

	return { data, errors, handleChange, handleSubmit, validate };
}

export default useValidate;
