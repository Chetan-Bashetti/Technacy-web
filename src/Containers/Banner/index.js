import React from 'react';
import '../../Assets/CSS/Banner.css';
import MuiButton from '../../Components/Button/MuiButton';
import ComponentsWrapper from '../../Components/ComponentsWrapper';
import { ReactComponent as HeroIcon } from '../../Assets/Images/hero-img.svg';

const Banner = () => {
	return (
		<div className='banner-main-wrapper' id='home'>
			<div className='banner-br-wrapper'>
				<ComponentsWrapper
					children={
						<div className='banner-content'>
							<div className='banner-text-wrapper'>
								<div className='banner-text'>Ready for any web projects</div>
								<div className='banner-sub-text'>
									We're a design studio that creates beautiful digital products,
									brands and experiences for amazing companies and disruptive
									startups.
								</div>

								<div style={{ marginTop: '1em' }}>
									<a
										href={`https://wa.me/+919060003573?text=Hi, Can you help me to build a website?`}
										target='_blank'
										text='Hello'
										rel='noopener noreferrer'
									>
										<MuiButton title='Contact' />
									</a>
								</div>
							</div>
							<div className='banner-image'>
								<HeroIcon className='hero-image' />
							</div>
						</div>
					}
				/>
			</div>
		</div>
	);
};

export default Banner;
