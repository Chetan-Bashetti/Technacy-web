import { services } from '../../mock/services';
import TabletAndroidIcon from '@mui/icons-material/TabletAndroid';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import WorkIcon from '@mui/icons-material/Work';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import RecordVoiceOverIcon from '@mui/icons-material/RecordVoiceOver';
import FormatShapesIcon from '@mui/icons-material/FormatShapes';

import './services.css';

const iconsStyle = {
	color: 'var(--primary-bg)',
	fontSize: '3em'
};

const EachService = ({ title, img, desc }) => {
	return (
		<div className='each-service'>
			<div className='eb-infobox-dvwldye eb-infobox-wrapper'>
				<div className='infobox-wrapper-inner'>
					<div className='icon-img-wrapper'>
						<div className='eb-infobox-image-wrapper'>{img}</div>
					</div>
					<div className='contents-wrapper'>
						<h2 className='service-title'>{title}</h2>
						<p className='service-description'>{desc}</p>
					</div>
				</div>
			</div>
		</div>
	);
};

const Services = () => {
	const eventIcons = {
		web_design: <FormatShapesIcon style={iconsStyle} />,
		web_development: <LaptopMacIcon style={iconsStyle} />,
		mobile_applications: <TabletAndroidIcon style={iconsStyle} />,
		business_analysis: <WorkIcon style={iconsStyle} />,
		business_advice: <AnalyticsIcon style={iconsStyle} />,
		technical_analysis_advice: <RecordVoiceOverIcon style={iconsStyle} />,
		technical_support: <SupportAgentIcon style={iconsStyle} />
	};

	return (
		<div className='container-wrapper' id='services'>
			<div className='titles'>Specializing In</div>
			<div className='our-services'>
				{services.map((eachService) => (
					<EachService
						key={eachService.key}
						title={eachService.title}
						img={eventIcons[eachService.key]}
						desc={eachService.desc}
					/>
				))}
			</div>
		</div>
	);
};

export default Services;
