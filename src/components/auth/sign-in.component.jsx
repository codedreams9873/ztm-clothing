import { createDocFromAuth, signInWithGooglePopup } from "../../utils/firebase/firebase.utils";
import SignUpForm from "./signup-form.component";

const SignIn = () => {
	const logGoogleUser = async () => {
		const response = await signInWithGooglePopup();
		createDocFromAuth(response.user);
	};

	return (
		<div>
			<h1>Sign In Page</h1>
			<button onClick={logGoogleUser}>Sign in with Google Popup</button>

			<SignUpForm />
		</div>
	);
};

export default SignIn;
