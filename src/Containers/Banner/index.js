import React from 'react';
import '../../Assets/CSS/Banner.css';
import Button from '../../Components/Button';
import ComponentsWrapper from '../../Components/ComponentsWrapper';

const Banner = () => {
	return (
		<div className='banner-main-wrapper' id='home'>
			<div className='banner-br-wrapper'>
				<ComponentsWrapper
					children={
						<div className='banner-content'>
							<div className='banner-text-wrapper'>
								<div className='banner-text'>
									One stop solution for your business needs
								</div>
								<div style={{ marginTop: '1em' }}>
									<a
										href={`https://wa.me/+919060003573?text=Hi, Can you help me to build a website?`}
										target='_blank'
										text='Hello'
										rel='noopener noreferrer'
									>
										<Button text='Contact' />
									</a>
								</div>
							</div>
							<div className='banner-image'>
								<img
									src={require('../../Assets/Images/banner-user.png')}
									alt='banner-user'
									className='banner-user-img'
								/>
							</div>
						</div>
					}
				/>
			</div>
		</div>
	);
};

export default Banner;
