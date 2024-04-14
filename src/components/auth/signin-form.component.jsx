import { useState } from "react";
import { createDocFromAuth, signInWithEmail, signInWithGooglePopup } from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
import "./sign-form.styles.scss";

const defaultFormFields = {
	email: "",
	password: "",
};

const SignInForm = () => {
	const [formFields, setFormFields] = useState(defaultFormFields);
	const { email, password } = formFields;

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormFields({ ...formFields, [name]: value });
	};

	const resetFormFields = () => {
		setFormFields(defaultFormFields);
	};

	const signInWithGoogle = async () => {
		const response = await signInWithGooglePopup();
		const userRef = await createDocFromAuth(response.user);
		console.log(userRef);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			const response = await signInWithEmail(email, password);
			console.log(response);
			resetFormFields();
		} catch (error) {
			console.log(error.code);
			switch (error.code) {
				case "auth/invalid-credential":
					alert("Provided wrong email or password.");
					break;
				case "auth/user-not-found":
					alert("No user associated with this email.");
					break;
				default:
					console.log(error);
			}
		}
	};

	return (
		<div className="sign-container">
			<h2>Already have an account?</h2>
			<span>Sign in with your Email and Password</span>
			<form onSubmit={handleSubmit}>
				<FormInput label="Email" inputOptions={{ type: "email", name: "email", value: email, onChange: handleChange, required: true }} />
				<FormInput label="Password" inputOptions={{ type: "password", name: "password", value: password, onChange: handleChange, required: true }} />
				<div className="buttons-container">
					<Button type="submit">Sign In</Button>
					<Button type="button" buttonType="google" onClick={signInWithGoogle}>
						Google Sign In
					</Button>
				</div>
			</form>
		</div>
	);
};

export default SignInForm;
