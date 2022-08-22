import React from 'react';
import '../../Assets/CSS/Header.css';

import ComponentsWrapper from '../../Components/ComponentsWrapper';
import Links from './Partails/Links';

const Header = () => {
	return (
		<div className='header-main-wrapper '>
			<ComponentsWrapper
				children={
					<div className='header-content-wrapper'>
						<div className='header-logo-wrapper'>
							<img
								className='logo'
								src={require('../../Assets/Images/tecnacy.jpeg')}
								alt='tecnacy'
							/>
						</div>
						<div className='links'>
							<Links />
						</div>
						<div className='links-2'>
							<Links />
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Header;
