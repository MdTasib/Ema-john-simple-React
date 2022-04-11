import React, { useState } from "react";

const Shipment = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [address, setAddress] = useState("");
	const [phone, setPhone] = useState("");

	const handleName = event => {
		setName(event.target.name);
	};

	const handleEmail = event => {
		setEmail(event.target.email);
	};

	const handleAddress = event => {
		setAddress(event.target.value);
	};

	const handlePhone = event => {
		setPhone(event.target.value);
	};

	const handleSubmit = () => {};

	return (
		<div className='login-form'>
			<h3>Your Shipping Information</h3>
			<form onSubmit={handleSubmit}>
				<div className='input-group'>
					<label htmlFor='name'>Your Name</label>
					<input onBlur={handleName} type='text' id='name' required />
				</div>
				<div className='input-group'>
					<label htmlFor='email'>Your Email</label>
					<input onBlur={handleEmail} type='email' id='email' required />
				</div>
				<div className='input-group'>
					<label htmlFor='address'>Your Address</label>
					<input onBlur={handlePhone} type='text' id='address' required />
				</div>
				<div className='input-group'>
					<label htmlFor='phone'>Your Phone</label>
					<input onBlur={handlePhone} type='text' id='Phone' required />
				</div>
				<input className='login-btn' type='submit' value='Add Shipping' />
			</form>
		</div>
	);
};

export default Shipment;
