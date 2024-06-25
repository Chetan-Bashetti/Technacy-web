import React from 'react';
import '../Assets/CSS/WebHome.css';

// Components
import Banner from '../Containers/Banner';
import CardWrapper from '../Containers/CardWrapper';
import Footer from '../Containers/Footer';
// import Header from '../Containers/Header';
import Feedback from '../Containers/Feedback';
import NavBar from '../Components/Navbar/NavBar';

const WebHome = () => {
	return (
		<div className='web-main-wrapper'>
			{/* <Header /> */}
			<NavBar />
			<Banner />
			<CardWrapper />
			<Feedback />
			<Footer />
		</div>
	);
};
export default WebHome;
