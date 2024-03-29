import React from "react";

function Input({ name, label, value, onChange }) {
	return (
		<div className="mb-3">
			<label htmlFor={name} className="form-label">
				{label}
			</label>
			<input
				autoFocus
				value={value}
				onChange={onChange}
				id={name}
				name={name}
				type="text"
				className="form-control"
			/>
			<div id="emailHelp" className="form-text">
				We'll never share your email with anyone else.
			</div>
		</div>
	);
}

export default Input;
