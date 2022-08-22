import React from 'react';
import '../../Assets/CSS/Feedback.css';
import Card from '../../Components/Card';
import ComponentsWrapper from '../../Components/ComponentsWrapper';

const Feedback = () => {
	let cardsData = [
		{
			image: 'male-user-placeholder.webp',
			title: 'Ranjeet J',
			description:
				'Best investment advisor and portfolio management Service provider'
		},
		{
			image: 'male-user-placeholder.webp',
			title: 'Ajith Math',
			description:
				'Trust and transparency is key to partnering with Lakshmi Narayana R, and definitely, there is a steady protection of wealth and good returns.'
		},
		{
			image: 'male-user-placeholder.webp',
			title: 'Pakshal Oswal',
			description:
				'Totally worth investing with them in equities. The exit logic they have ensures a minimal loss while trading.'
		}
	];
	return (
		<div className='feedback-main-wrapper' id='process'>
			<div className='feedback-title'>What out client's say</div>
			<ComponentsWrapper
				children={
					<div className='feedback-cards-container'>
						{cardsData?.map((each, id) => (
							<Card
								key={id}
								image={each.image}
								title={each.title}
								description={each.description}
								height={'100px'}
							/>
						))}
					</div>
				}
			/>
		</div>
	);
};

export default Feedback;
