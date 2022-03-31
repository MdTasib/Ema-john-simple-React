import React from "react";
import "./ReviewItem.css";
import deleteIcon from "../../images/delete.png";

const ReviewItem = props => {
	const { name, img, price, quantity, shipping } = props.product;

	return (
		<div className='flex item'>
			<div>
				<img width={50} src={img} alt='' />
			</div>
			<div className='item-info'>
				<h6>{name}</h6>
				<p>Price : {price}</p>
				<p>Quantity : {quantity}</p>
				<p>Shipping : {shipping}</p>
			</div>
			<img width={40} src={deleteIcon} alt='' />
		</div>
	);
};

export default ReviewItem;
