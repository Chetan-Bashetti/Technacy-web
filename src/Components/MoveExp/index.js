import React from 'react';
import './index.css';

const Move = () => {
	const [scrollHeight, setScrollHeight] = React.useState(0);

	React.useEffect(() => {
		console.log(window.scrollY);
		window.addEventListener('scroll', (e) => setScrollHeight(window.scrollY));
	}, []);

	return (
		<div className='move-wrap'>
			<div className='move-wrap-1'>
				<img
					src={require('../../Assets/Images/pngtree-black-sunglasses-sport-vector-png-image_7964933.png')}
					alt='sunglasses'
					className={scrollHeight > 1000 ? 'banner-img animate' : 'banner-img'}
				/>
				<img
					src={require('../../Assets/Images/pngtree-black-sunglasses-sport-vector-png-image_7964933.png')}
					alt='sunglasses'
					className={
						scrollHeight > 1000 ? 'banner-img animate-2' : 'banner-img'
					}
				/>
			</div>
			<div className='move-wrap-2'>
				<img
					src={require('../../Assets/Images/chetan_bashetti.jpg')}
					alt='sunglasses'
					className='user-img'
				/>
			</div>
		</div>
	);
};

export default Move;
