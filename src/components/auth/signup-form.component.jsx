import { useState } from "react";
import { createDocFromAuth, createUserFromEmail } from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
import "./sign-form.styles.scss";

const defaultFormFields = {
	displayName: "",
	email: "",
	password: "",
	password1: "",
};

const SignUpForm = () => {
	const [formFields, setFormFields] = useState(defaultFormFields);
	const { displayName, email, password, password1 } = formFields;

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormFields({ ...formFields, [name]: value });
	};

	const resetFormFields = () => {
		setFormFields(defaultFormFields);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (password !== password1) {
			alert("Password does not match.");
			return;
		}

		try {
			const { user } = await createUserFromEmail(email, password);
			await createDocFromAuth(user, { displayName });
			resetFormFields();
		} catch (error) {
			if (error.code === "auth/email-already-in-use") {
				alert("Email already in use");
			} else console.log("Error: ", error);
		}
	};

	return (
		<div className="sign-container">
			<h2>Already have an account?</h2>
			<span>Sign up with your email and password</span>
			<form onSubmit={handleSubmit}>
				<FormInput label="Display Name" inputOptions={{ type: "text", name: "displayName", value: displayName, onChange: handleChange, required: true }} />
				<FormInput label="Email" inputOptions={{ type: "email", name: "email", value: email, onChange: handleChange, required: true }} />
				<FormInput label="Password" inputOptions={{ type: "password", name: "password", value: password, onChange: handleChange, required: true }} />
				<FormInput label="Confirm Password" inputOptions={{ type: "password", name: "password1", value: password1, onChange: handleChange, required: true }} />
				<Button type="submit">Sign Up</Button>
			</form>
		</div>
	);
};

export default SignUpForm;
