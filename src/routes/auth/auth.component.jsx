import SignInForm from "../../components/auth/signin-form.component";
import SignUpForm from "../../components/auth/signup-form.component";
import "./auth.styles.scss";

const Authentication = () => {
	return (
		<div className="auth-container">
			<SignInForm />
			<SignUpForm />
		</div>
	);
};

export default Authentication;
