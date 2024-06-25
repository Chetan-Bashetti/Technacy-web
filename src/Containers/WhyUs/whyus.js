import { ReactComponent as AboutUsImg } from '../../Assets/Images/about-img.svg';
import MuiButton from '../../Components/Button/MuiButton';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

import './whyus.css';

const points = [
	{
		desc: 'Stop wasting time and money designing and managing a website that doesn’t get results.'
	},
	{
		desc: 'Stop wasting time and money designing and managing.'
	},
	{
		desc: 'Stop wasting time and money designing and managing a website that doesn’t get results.'
	}
];

const WhyUs = () => {
	return (
		<div className='container-wrapper' id='why-us'>
			<div className='titles'>Why us</div>
			<div className='why-us-content'>
				<div className='why-us-text'>
					<div
						className='service-title'
						style={{ fontWeight: 500, textAlign: 'left' }}
					>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
						eiusmod tempor incididunt ut labore et dolore
					</div>
					<div className='why-us-points'>
						{points.map((eachPoint, id) => (
							<div key={eachPoint + id} className='each-point'>
								<CheckCircleOutlineIcon
									style={{
										color: 'var(--primary-bg)',
										marginRight: '0.3em',
										marginTop: '0.2em'
									}}
								/>
								<span className='service-description'>{eachPoint.desc}</span>
							</div>
						))}
					</div>
					<MuiButton title='Learn more' />
				</div>
				<div>
					<AboutUsImg className='hero-image hero-why-us' />
				</div>
			</div>
		</div>
	);
};

export default WhyUs;
