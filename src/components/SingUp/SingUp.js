import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthUser } from "../../App";
import auth from "../../firebase.init";

const SingUp = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
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

	const handleConfirmPassword = event => {
		setConfirmPassword(event.target.value);
	};

	const handleSubmit = event => {
		event.preventDefault();
		if (password !== confirmPassword) {
			setError("Password did not match");
			return;
		}
		createUserWithEmailAndPassword(auth, email, password)
			.then(result => {
				const user = result.user;
				setUser(user);
				if (user.uid) {
					navigate(from, { replace: true });
				}
			})
			.catch(error => console.log(error.message));
	};

	return (
		<div className='login-form'>
			<h3>Please Sing Up</h3>
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
				<div className='input-group'>
					<label htmlFor='confirmpassword'>Confirm Password</label>
					<input
						onBlur={handleConfirmPassword}
						type='password'
						id='confirmpassword'
						required
					/>
				</div>
				<input className='login-btn' type='submit' value='Sing Up' />
				<p>
					Already have an account ? <Link to='/login'>login</Link>
				</p>
				<p>{error}</p>
			</form>
		</div>
	);
};

export default SingUp;
