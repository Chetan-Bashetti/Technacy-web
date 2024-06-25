import React from 'react';
import '../../Assets/CSS/Footer.css';
import ComponentsWrapper from '../../Components/ComponentsWrapper';

const Footer = () => {
	return (
		<div className='footer-main-wrapper' id='about'>
			<ComponentsWrapper
				children={
					<div className='footer-content-wrapper'>
						<div className='footer-credits'>
							Designed by <div className='highlighted-text'>Tecnacy</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Footer;
