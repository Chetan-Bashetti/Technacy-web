import { pricing } from '../../mock/pricing';
import MuiButton from '../../Components/Button/MuiButton';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

import './pricing.css';

const Pricing = () => {
	return (
		<div>
			<div className='titles'>Pricing</div>
			<div className='why-us-content pricing-content'>
				<div className='service-title pricing-sub-title'>
					We offer highly competative prices in market
				</div>
				<div className='pricing-cards'>
					{pricing.map((eachPricing) => (
						<div className='pricing-card' key={eachPricing.title}>
							<div className='each-price-title capatilized'>
								{eachPricing.title}
							</div>
							<div className='each-price-sub-title capatilized'>
								{eachPricing.sub_title}
							</div>
							<div className='each-price'>₹ {eachPricing.price}</div>
							<div>
								{eachPricing.includes.map((eachSer) => (
									<div key={eachSer} className='each-point'>
										<CheckCircleOutlineIcon
											style={{
												color: 'var(--primary-bg)',
												marginRight: '0.3em',
												marginTop: '0.2em'
											}}
										/>
										<span className='service-description each-offer-text capatilized'>
											{eachSer}
										</span>
									</div>
								))}
							</div>
							<div className='card-actions'>
								<MuiButton title='Get started' />
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Pricing;
