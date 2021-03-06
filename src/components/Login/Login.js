import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthUser } from "../../App";
import auth from "../../firebase.init";
import "./Login.css";

const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");
	const navigate = useNavigate();
	const [user, setUser] = useContext(AuthUser);
	const location = useLocation();

	let from = location.state?.from?.pathname || "/";

	const handleEmail = event => {
		setEmail(event.target.value);
	};

	const handlePassword = event => {
		setPassword(event.target.value);
	};

	const handleSubmit = event => {
		event.preventDefault();
		signInWithEmailAndPassword(auth, email, password)
			.then(result => {
				const user = result.user;
				setUser(user);
				if (user.uid) {
					navigate(from, { replace: true });
				}
			})
			.catch(error => setError(error.message));
	};

	return (
		<div className='login-form'>
			<h3>Please Log In</h3>
			<form onSubmit={handleSubmit}>
				<div className='input-group'>
					<label htmlFor='email'>Your Email</label>
					<input onBlur={handleEmail} type='email' id='email' required />
				</div>
				<div className='input-group'>
					<label htmlFor='password'>Your Password</label>
					<input
						onBlur={handlePassword}
						type='password'
						id='password'
						required
					/>
				</div>
				<input className='login-btn' type='submit' value='Log In' />
				<p>
					New To Ema John ? <Link to='/singup'>Create an account</Link>
				</p>
				<p>{error}</p>
			</form>
		</div>
	);
};

export default Login;
