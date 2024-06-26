import "./form-input.styles.scss";

const FormInput = ({ label, inputOptions }) => {
	return (
		<div className="input-group">
			<label className={`${inputOptions.value.length > 0 ? "shrink " : ""}form-input-label`}>{label}</label>
			<input className="form-input" {...inputOptions} />
		</div>
	);
};

export default FormInput;
