import React from "react";

function Input({ name, label, value, onChange, error, type='text' }) {
	return (
		<div className="mb-3">
			<label htmlFor={name} className="form-label">
				{label}
			</label>
			<input
				type={type}
				value={value}
				onChange={onChange}
				id={name}
				name={name}
				className="form-control"
			/>
			{error && <div className="alert alert-danger">{error}</div>}
		</div>
	);
}

export default Input;
