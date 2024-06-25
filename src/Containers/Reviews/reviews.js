import React from 'react';
import { Rating } from '@mui/material';
import { reviews } from '../../mock/reviews';

import './review.css';

const Reviews = () => {
	return (
		<div className='review-wrapper' id='reviews'>
			<div className='titles'>What our clients says?</div>
			<div className='reviews-conent'>
				{reviews?.map((eachReview) => (
					<div className='review' key={eachReview.user}>
						<img
							src={require(eachReview.gender === 'm'
								? '../../Assets/Images/user.jpg'
								: '../../Assets/Images/user-f.jpg')}
							alt='user'
							className='review-user-icon'
						/>
						<div className='review-text'>
							<Rating
								name='read-only'
								value={eachReview.rating}
								readOnly
								style={{ marginTop: '0.5em' }}
							/>
							<div className='user-name'>{eachReview.user}</div>
							<div className='review-desc'>❝ {eachReview.review} ❞</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Reviews;
