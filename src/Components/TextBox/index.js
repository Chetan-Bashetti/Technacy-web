import React from 'react';
import '../../Assets/CSS/TextBox.css';

const TextBox = ({ onChange }) => {
	return (
		<input
			className='text-box'
			placeholder='Enter your whatsapp number'
			onChange={onChange}
		/>
	);
};
export default TextBox;
