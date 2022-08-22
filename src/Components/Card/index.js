import React from 'react';
import '../../Assets/CSS/Card.css';

const Card = ({ image = '', title = '', description = '', height }) => {
	return (
		<div className='card-main-wrapper'>
			<div className='card-icon'>
				{image.length ? (
					<img
						src={require(`../../Assets/Images/${image}`)}
						alt='web-apps'
						style={{ height: height }}
					/>
				) : (
					''
				)}
			</div>
			<div className='card-title'>{title}</div>
			<div className='card-description'>{description}</div>
		</div>
	);
};
export default Card;
