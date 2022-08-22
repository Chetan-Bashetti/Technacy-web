import React from 'react';
import '../../Assets/CSS/CardWrapper.css';

import ComponentsWrapper from '../../Components/ComponentsWrapper';
import Card from '../../Components/Card';

const CardWrapper = () => {
	let cardsData = [
		{
			image: 'icon1.png',
			title: 'Webistes',
			description:
				'We develop and deliver highly scalable and interactive user interfaces for all types of busunesses and customers'
		},
		{
			image: 'icon2.png',
			title: 'Web Applications',
			description:
				'We keep in mind that a good web application architecture supports the future growth that comes from enhanced requirements, future interoperability, and increased demand.'
		},
		{
			image: 'icon3.png',
			title: 'Mobile Applications',
			description:
				'We deliver across all the popular mobile platforms and mobile-enabled technologies along with assisting companies with their mobile app delivery strategies to assure most optimal coverage of all target audiences.'
		}
	];
	return (
		<div className='cards-main-wrapper' id='features'>
			<ComponentsWrapper
				children={
					<div className='card-content-wrapper'>
						{cardsData?.map((each, id) => (
							<Card
								key={id}
								image={each.image}
								title={each.title}
								description={each.description}
							/>
						))}
					</div>
				}
			/>
		</div>
	);
};

export default CardWrapper;
