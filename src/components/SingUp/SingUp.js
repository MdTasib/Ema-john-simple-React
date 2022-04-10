import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";

const SingUp = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [error, setError] = useState("");
	const [createUserWithEmailAndPassword, user] =
		useCreateUserWithEmailAndPassword(auth);
	const navigate = useNavigate();

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
			setError("You password did not match");
			return;
		}

		createUserWithEmailAndPassword(email, password);
	};

	if (user) {
		navigate("/shop");
	}

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
			</form>
		</div>
	);
};

export default SingUp;
