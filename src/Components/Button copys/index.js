import React from 'react';
import '../../Assets/CSS/Button.css';

const Button = ({ text = '', onClick = () => {}, style }) => {
	return (
		<button className='button' onClick={() => onClick()} style={style}>
			{text}
		</button>
	);
};

export default Button;
