import React from 'react';
import '../../../../Assets/CSS/Links.css';

const Links = () => {
	let links = [
		{ link: 'Home', value: 'home' },
		{ link: 'Features', value: 'features' },
		{ link: 'Process', value: 'process' },
		{ link: 'About', value: 'about' }
	];

	const goToViolation = (id) => {
		const violation = document.getElementById(id);
		window.scrollTo({
			top: violation.offsetTop,
			behavior: 'smooth'
		});
	};

	return (
		<div className='links-main-wrapper'>
			{links?.map((each, id) => (
				<div
					key={id}
					className='each-link'
					onClick={() => goToViolation(each.value)}
				>
					{each.link}
				</div>
			))}
		</div>
	);
};

export default Links;
