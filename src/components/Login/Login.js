import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
	return (
		<div className='login-form'>
			<h3>Please Log In</h3>
			<form>
				<div className='input-group'>
					<label htmlFor='email'>Your Email</label>
					<input type='email' id='email' />
				</div>
				<div className='input-group'>
					<label htmlFor='password'>Your Password</label>
					<input type='password' id='password' />
				</div>
				<input className='login-btn' type='submit' value='Log In' />
				<p>
					New To Ema John ? <Link to='/singup'>Create an account</Link>
				</p>
			</form>
		</div>
	);
};

export default Login;
