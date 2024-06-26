import React from 'react';

import HomeIcon from '@mui/icons-material/Home';
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import RateReviewOutlinedIcon from '@mui/icons-material/RateReviewOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import ContactsIcon from '@mui/icons-material/Contacts';

import './Navbar.css';

const NavBar = () => {
	const links = [
		{ title: 'home', id: '#home', icon: <HomeIcon /> },
		{ title: 'services', id: '#services', icon: <MiscellaneousServicesIcon /> },
		{ title: 'about us', id: '#about_us', icon: <SupervisorAccountIcon /> },
		{
			title: 'team',
			id: '#team',
			icon: <Diversity3Icon />
		},
		{
			title: 'why us',
			id: '#why-us',
			icon: <EmojiObjectsIcon />
		},
		{
			title: 'reviews',
			id: '#reviews',
			icon: <RateReviewOutlinedIcon />
		},
		{
			title: 'contact us',
			id: '#contact',
			icon: <ContactsIcon />
		}
	];

	const [isMenuOpen, setMenuOpen] = React.useState(false);

	const toggleMenu = () => {
		setMenuOpen(!isMenuOpen);
	};

	return (
		<header>
			<div className='logo'>
				<img
					src={require('../../Assets/Images/tecnacy.jpeg')}
					alt='UrbanMES'
					className='logo-img'
				/>
			</div>

			<nav className={isMenuOpen ? 'open' : ''}>
				{isMenuOpen ? (
					<div className='logo-sm'>
						<img
							src={require('../../Assets/Images/tecnacy.jpeg')}
							alt='UrbanMES'
							className='logo-img'
							style={{ paddingBottom: '0.6em' }}
						/>
					</div>
				) : (
					''
				)}
				<ul>
					{links.map((eachLink, id) => (
						<li key={id} onClick={toggleMenu}>
							<a href={`${eachLink.id}`} className='links'>
								{isMenuOpen ? <div className='icons'>{eachLink.icon}</div> : ''}
								<div style={{ marginLeft: '1em', fontWeight: 600 }}>
									{eachLink.title}
								</div>
							</a>
						</li>
					))}
				</ul>
			</nav>

			<div className='mobile-menu-icon' onClick={toggleMenu}>
				{isMenuOpen ? (
					<CloseIcon
						style={{
							position: 'fixed',
							top: '1em',
							right: '1em'
						}}
					/>
				) : (
					<MenuIcon className='nav-icons' />
				)}
			</div>
		</header>
	);
};

export default NavBar;
