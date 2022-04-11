import React, { useContext, useState } from "react";
import { AuthUser } from "../../App";

const Shipment = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [address, setAddress] = useState("");
	const [phone, setPhone] = useState("");
	const [user] = useContext(AuthUser);

	const handleName = event => {
		setName(event.target.value);
	};

	const handleEmail = event => {
		setEmail(event.target.value);
	};

	const handleAddress = event => {
		setAddress(event.target.value);
	};

	const handlePhone = event => {
		setPhone(event.target.value);
	};

	const handleSubmit = event => {
		event.preventDefault();
		const shipping = { name, email, address, phone };
		console.log(shipping);
	};

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
					<input
						onBlur={handleEmail}
						value={user?.email}
						readOnly
						type='email'
						id='email'
						required
					/>
				</div>
				<div className='input-group'>
					<label htmlFor='address'>Your Address</label>
					<input onBlur={handleAddress} type='text' id='address' required />
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
