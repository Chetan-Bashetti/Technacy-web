import React from 'react';
import '../Assets/CSS/WebHome.css';

// Components
import Banner from '../Containers/Banner';
import Footer from '../Containers/Footer';
import NavBar from '../Components/Navbar/NavBar';
import Services from '../Containers/Services/services';
import WhyUs from '../Containers/WhyUs/whyus';
import Reviews from '../Containers/Reviews/reviews';
import Team from '../Containers/Team/team';
import Pricing from '../Containers/Pricing/pricing';
import ContactUs from '../Containers/QueryForm/contactus';

const WebHome = () => {
	return (
		<div className='web-main-wrapper'>
			<NavBar />
			<Banner />
			<Services />
			<WhyUs />
			<Team />
			<Pricing />
			<Reviews />
			<ContactUs />
			<Footer />
		</div>
	);
};
export default WebHome;
