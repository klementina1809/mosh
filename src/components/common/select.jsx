import React from "react";

function Select({ name, label, value, onChange, error, options }) {
	return (
		<div className="form-group">
			<label htmlFor={name}>{label}</label>
			<select
				id={name}
				name={name}
				className="form-control"
				value={value}
				onChange={onChange}
			>
				<option value="">Select {label}</option>
				{options.map((option, index) => (
					<option key={index} value={option}>
						{option}
					</option>
				))}
			</select>
			{error && <div className="alert alert-danger">{error}</div>}
		</div>
	);
}

export default Select;
