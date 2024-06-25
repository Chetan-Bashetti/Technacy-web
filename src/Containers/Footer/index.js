import React from 'react';
import '../../Assets/CSS/Footer.css';
import ComponentsWrapper from '../../Components/ComponentsWrapper';
import TextBox from '../../Components/TextBox';
import MuiButton from '../../Components/Button/MuiButton';

const Footer = () => {
	const [number, setNumber] = React.useState('');

	const handleOnChange = (e) => {
		let { value } = e.target;
		setNumber(value);
	};
	return (
		<div className='footer-main-wrapper' id='about'>
			<ComponentsWrapper
				children={
					<div className='footer-content-wrapper'>
						{/* <div className='footer-title'>Subscribe to Our Newsletter</div>
						<div className='footer-sub-title'>To get latest updates</div>
						<div className='footer-actions'>
							<TextBox onChange={(e) => handleOnChange(e)} />
							<div>
								<a
									href={`https://wa.me/+919060003573?text=Hi, Team Tecnacy, please consider my number ${number} for the newsletter subscription though WhatsApp.`}
									target='_blank'
									text='Hello'
									rel='noopener noreferrer'
								>
									<MuiButton
										title='Subscribe'
										style={{
											borderTopLeftRadius: 0,
											borderBottomLeftRadius: 0
										}}
									/>
								</a>
							</div>
						</div> */}
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
