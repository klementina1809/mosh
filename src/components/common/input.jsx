import React from "react";

function Input({ name, label, value, onChange, error }) {
	return (
		<div className="mb-3">
			<label htmlFor={name} className="form-label">
				{label}
			</label>
			<input
				value={value}
				onChange={onChange}
				id={name}
				name={name}
				type="text"
				className="form-control"
			/>
			{error && <div className="alert alert-danger">{error}</div>}
		</div>
	);
}

export default Input;
